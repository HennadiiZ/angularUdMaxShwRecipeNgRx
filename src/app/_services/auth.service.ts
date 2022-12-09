import { registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, Subject, tap } from 'rxjs';
import { AuthResponseData } from '../_interfaces/auth-response-data.interface';
import { User } from '../_models/user.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  SIGN_UP = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
  SIGN_IN = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
  SIGN_OFF = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
  // API_KEY = 'AIzaSyAuUHpZm38t_A7aM6xrBd5QUlWrUqF4IYM';
  API_KEY = environment.firebaseApiKey;

  // userSubject = new Subject<User>();
  userSubject = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;
  // token: string = null;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  signUp(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(
      `${this.SIGN_UP}${this.API_KEY}`,
      { email, password, returnSecureToken: true }
    )
    .pipe(
      // catchError((error)=> {
      //   // not finished...
      // }),
      tap(res => {
        this.handleAuthentication(
          res.email,
          res.localId,
          res.idToken,
          +res.expiresIn
        )
      })
    );
  }

  signIn(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(
      `${this.SIGN_IN}${this.API_KEY}`,
      { email, password, returnSecureToken: true }
    ).pipe(
      tap(res => {
        this.handleAuthentication(
          res.email,
          res.localId,
          res.idToken,
          +res.expiresIn
        )
      })
    );
  }

  autoLogin(): void {
    const userData: {
      email: string,
      id: string,
       _token: string,
       _tokenExpirationDate: Date
    } = JSON.parse(localStorage.getItem('userData'));

    if(!userData) {
      return;
    }

    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if(loadedUser.token) {
      this.userSubject.next(loadedUser);
      const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogOut(expirationDuration);
    }
  }

  logOut(): void {
    this.userSubject.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');

    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
  }

  autoLogOut(expirationDuration: number): void {
    console.log('expirationDuration', expirationDuration);
    this.tokenExpirationTimer = setTimeout(() => {
      this.logOut();
    // }, expirationDuration);
    }, 50000); //---------------- expirationDuration is not working !!!
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
    console.log('expirationDate', expirationDate);
    const user = new User(
      email,
      userId,
      token,
      expirationDate
    );
    this.userSubject.next(user);
    this.autoLogOut(+expirationDate * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }
}
