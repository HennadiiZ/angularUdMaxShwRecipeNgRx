import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, ofType, Effect } from "@ngrx/effects";
// import { Actions, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { AuthResponseData } from "src/app/_interfaces/auth-response-data.interface";
import { environment } from "src/environments/environment";
import * as AuthActions from './auth.actions';

@Injectable()

export class AuthEffects {

  SIGN_UP = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
  SIGN_IN = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
  SIGN_OFF = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
  API_KEY = environment.firebaseApiKey;

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {}

  @Effect()
  authLogin = this.actions$.pipe(
    ofType(AuthActions.LOGIN_START),
    switchMap((authData: AuthActions.LoginAStart) => {
      return this.http.post<AuthResponseData>(
        `${this.SIGN_IN}${this.API_KEY}`,
        {
          email: authData.payload.email,
          password: authData.payload.password,
          returnSecureToken: true
        }
      ).pipe(
          map(resData => {
            const expirationDate = new Date(new Date().getTime() + +resData.expiresIn * 1000);
            return of(new AuthActions.Login(
              {
                email: resData.email,
                userId: resData.localId,
                token: resData.idToken,
                expirationDate: expirationDate
              }));
          }),
          catchError(error => {
            return of();
          })
        );
    }),
    // catchError()
  );

}
function Effect() {
  throw new Error("Function not implemented.");
}

