import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

curuser="";

  @Output() fireIsLoggedIn: EventEmitter<any> = new EventEmitter<any>(); 
  private apiServerUrl=environment.apiBaseUrl;
  constructor(private http:HttpClient) { }

  public loginUser(user:User):Observable<User>
  {
    this.http.post<User>(`${this.apiServerUrl}/login`,user).subscribe
    (
      data => {
     
        this.curuser=data.username;
        console.log("last",this.curuser)
        this.fireIsLoggedIn.emit( this.curuser);
      },
      error => {
        console.log("exception occured ")
        
      }

    )




   
 return this.http.post<User>(`${this.apiServerUrl}/login`,user);


  }

  public registerUser(user:User):Observable<User>
  {
 return this.http.post<User>(`${this.apiServerUrl}/registeruser`,user);

  }

  getEmitter() { 
    return this.fireIsLoggedIn; 
  } 
  
}
