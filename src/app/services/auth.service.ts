import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

interface UserInfo {
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  setToken(token: string) {
    localStorage.setItem('token', token)
  }

  getToken() {
    return localStorage.getItem('token')
  }

  isLoggedIn() {
    return this.getToken() !== null
  }

  login(userInfo: UserInfo): Observable<string | boolean> {
    if(userInfo.email === 'admin@email.com' && userInfo.password === 'admiN123') {
      this.setToken('23u12hjdkf932kdsj39')
      return of(true)
    }
    return throwError(() => new Error('Неверный логин или пороль'))
  }

  logout() {
    this.router.navigate(['login'])
  }
}
