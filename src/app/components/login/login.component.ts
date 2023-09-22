import { Component } from '@angular/core';
import {FormGroup, Validators, FormBuilder  } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AccessTokenModel } from 'src/app/models/access-token-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  public loginForm:FormGroup;
  public accessTokenModel:AccessTokenModel | undefined;

  constructor(private formBuilder:FormBuilder,
    private authService:AuthService,
    private router:Router
    ) { 
      this.loginForm = this.formBuilder.group({
        email: ["",Validators.required],
        password:["",Validators.required]
      })
    }
    
   
    
  

  login(){
    
    if(this.loginForm.valid){
      let loginModel = Object.assign({},this.loginForm.value)

      this.authService.login(loginModel).subscribe(data => {
        this.accessTokenModel = data;
        localStorage.setItem("token", this.accessTokenModel.accessToken.token);
        this.router.navigate([""]);
      });
      
      
      
    }
  }
}
