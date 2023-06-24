import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  //<any> because we return user object in C#, not best way(?)
  public register (user:User): Observable<any>{
    return this.http.post<any>('https://localhost:7004/api/Auth/register',user);
  }
  //stirng because jwt token
  public login (user:User): Observable<string>{
    return this.http.post('https://localhost:7004/api/Auth/login',user, {responseType:'text'} );
  }

  public getMe(): Observable<string>{
    return this.http.get('https://localhost:7004/api/Auth',{responseType:'text'} );
  }
}
