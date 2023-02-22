import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserForLogin, UserForRegister } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

login(user: UserForLogin) {
    return this.http.post(this.baseUrl + '/account/login', user);
}

registerUser(user: UserForRegister) {
    return this.http.post(this.baseUrl + '/account/register', user);
}
isLoggedIn(): boolean {

  return localStorage.getItem('currentUser')!=null;
}

}
