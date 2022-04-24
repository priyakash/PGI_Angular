import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { MovieserviceService } from '../service/movieservice.service';
import { Movie } from '../service/movie';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { LoginauthService } from '../service/loginauth.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnChanges {

  @Input() username: string = "Priya";
  @Input() loginusername = "Login";
public   loggedIn: boolean | undefined;

  ngOnChanges(changes: SimpleChanges) {
    // console.log("val");
    //  this.updateData();
    console.log(changes)
    // changes.prop contains the old and the new value...
  }

  constructor(private loginauth: LoginService) {
    // this.loginusername= loginauth.currentuser;
    // console.log(this.loginusername,"in navbar")
  }

  // constructor(private loginauth :LoginauthService) {
  //     console.log("curre"+loginComponent.loginusername);
  // this.loginusername=loginComponent.loginusername;

  // }



  ngOnInit() {
    this.loginauth.getEmitter().subscribe((currentuser) => {
      if (currentuser) { this.loggedIn = true; }
      this.loginusername = "welcome " + currentuser + "!";

      console.log("Component is notified of successfull login!", currentuser);

    });
  }


  //   updateData()
  // {
  //   this.loginusername= this.loginauth.currentuser;
  //   console.log("nav bar",this.loginauth.currentuser) ;
  // }


  authenticated() {
    this.loggedIn = true;
  }

  onlogout() {
    this.loggedIn = false;
  }

}
