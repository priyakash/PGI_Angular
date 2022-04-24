import { Component, OnInit, Input,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';

import { LoginService } from '../service/login.service';
import { LoginauthService } from '../service/loginauth.service';
import { User } from '../service/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // @Input() loginusername: any ;  
  public user: User = {} as User;
  msg = "";
  username="";
 public loginusername="";

// @Output() updateDataEvent =new EventEmitter<string>();


  constructor(private loginService: LoginService, private router: Router,private loginauth:LoginauthService) { }

  ngOnInit(): void {
   // this.loginuser();
  }


  loginuser() {
    this.loginService.loginUser(this.user).subscribe(
      data => {
        console.log(data,"loginuser")
        console.log(data.username);

        console.log("response received")
        this.loginusername=data.username;
        this.loginauth.currentuser=data.username;
        console.log("logincomp", this.loginauth.currentuser);
        console.log("logincomp username", this.loginusername);
        this.router.navigate(['/movie'])
      },
      error => {
        console.log("exception occured ")
        this.msg = "Bad credentials,Please enter valid email id and password";
      }

    )
  }


  registeruser() {
    this.loginService.registerUser(this.user).subscribe(
      data => {

        console.log("Registration sucess")
        this.router.navigate(['/loginsuccess'])
      },
      error => {
        console.log("exception occured ")
        this.msg = "Bad credentials,Please enter valid credentails";
      }

    )
  }

}
