import { HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { exhaustMap, map, take } from "rxjs";
import { AppState } from "../_interfaces/app-state.interface";
import { AuthService } from "./auth.service";

// @Injectable({providedIn: 'root'})
@Injectable()

export class AuthInterceptorService implements HttpInterceptor{
  constructor(
    private  authService:  AuthService,
    private store: Store<AppState>
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // return this.authService.userSubject
    return this.store.select('auth')
    .pipe(
      take(1),
      //
      map(authState => {
        return authState.user;
      }),
      exhaustMap((user) => {

        if (!user) {
          return next.handle(req);
        }
        const modifiedReq = req.clone({ params: new HttpParams().set("auth", user.token)});
        return next.handle(modifiedReq);
      })
    )
  }
}
