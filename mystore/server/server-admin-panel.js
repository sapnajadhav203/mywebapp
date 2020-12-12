const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const jwt=require('jsonwebtoken')
const utils=require('./utils')
const config=require('./config')
const morgan=require('morgan')

const routerAdmins=require('./routes/admin/admins')
const routeProduct=require('./routes/admin/product')
const routerUser=require('./routes/admin/user')
const routerCategory=require('./routes/admin/category')
const routerOrder=require('./routes/admin/order')
const routerBrand=require('./routes/admin/brand')

const app=express()
app.use(bodyParser.json())
app.use(cors('*'))
app.use(morgan('dev'))


function AuthorizedUser(request,response,next)
{
   if(request.url=="/admins/signin")
   {
       next()
   }else{
       const token=request.headers['token']
       if(!token)
       {
           response.status(401)
           response.send(utils.createResult('token is missing'))
       }else{
           try{
               const data=jwt.verify(token,config.secret)
               request.userId=data.id
                 next()
            }
            catch(ex){
                response.status(401)
           response.send(utils.createResult('invalid token'))
            }
       }
   }
}


app.use(AuthorizedUser)





app.use('/product',routeProduct)
app.use('/order',routerOrder)
app.use('/category',routerCategory)
app.use('/admins',routerAdmins)
app.use('/user',routerUser)
app.use('/brand',routerBrand)

app.listen(4000,'0.0.0.0',()=>{
    console.log('server started on port 4000')
})