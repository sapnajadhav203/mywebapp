import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
email=''
password=''
  constructor(private service:AdminService,private toastr:ToastrService,private router:Router) { }

  ngOnInit(): void {
  }
  onSignin()
  {
    if(this.email.length==0)
    {
      this.toastr.warning('please enter email')
    }else if(this.password.length==0)
    {
      this.toastr.warning('please enter password')
    }else{
      const observable=this.service.signin(this.email,this.password)
    observable.subscribe(response=>{
      if(response['status']=='success')
      {
        this.toastr.success('welcome')
        const user=response['data']
        sessionStorage['user_name']=user['firstName']+' '+user['lastName']
        sessionStorage['token']=user['token']
        this.router.navigate(['/product-list'])
      }else{
        this.toastr.error(response['error'])
      }
    })
    }
    
  }

}
