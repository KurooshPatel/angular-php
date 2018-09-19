import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";


import { LoginService } from "../../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname='kurooshpatel@gmail.com';
  psw='123456';
  isValid=true;
  loginForm:any;
  constructor(private formBuilder:FormBuilder,private loginService:LoginService, private router:Router) {
    this.loginForm=formBuilder.group({
      "uname":[null, Validators.required],
      "psw":[null,Validators.required]
    });
  }


  ngOnInit() {

  }
  login(values){
    console.log('hello',values);
    this.loginService.login(values.uname,values.psw).subscribe(users=>{
      if(users.first_name){
        this.router.navigate(["user/profile"]);
      }else{
        this.isValid=false
      }

    });
  }
}
