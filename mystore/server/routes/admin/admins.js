const express=require('express')
const db=require('../../db')
const utils=require('../../utils')
const { request } = require('http')
const crypto=require('crypto-js')
const config=require('../../config')
const jwt=require('jsonwebtoken')
const router=express.Router()

router.post('/signin',(request,response)=>{
    const{email,password}=request.body
    const encryptedPassword=crypto.SHA256(password)
    const statement=`select firstName,lastName,phone from admins where email='${email}'and password='${encryptedPassword}'`

    db.query(statement,(error,users)=>{
        const result={}
        if(error)
        {
            result['status']='error'
           result['error']=error
        }
        else if(users.length==0)
        {
            result['status']='error'
        result['error']='invalid username/password'
        }
        else{
            const user=users[0]
            const token = jwt.sign({id:user['id']}, config.secret)
            result['status']='success'
            result['data']={
                firstName: user['firstName'],
                lastName: user['lastName'],
                token: token
            }
        }
        response.send(result)
    })
})





module.exports=router