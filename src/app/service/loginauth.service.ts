import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginauthService {


  static loginflag="";
  public currentuser="";

  constructor() { }


  validateuser(username:User)
  {
console.log(username);
  }
}
