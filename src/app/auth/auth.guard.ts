import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import { Store } from "@ngrx/store";
import { map, Observable, take, tap } from "rxjs";
import { AppState } from "../_interfaces/app-state.interface";
import { AuthService } from "../_services/auth.service";

@Injectable({providedIn: 'root'})

export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ): boolean | Promise<boolean> | Observable<boolean | UrlTree> {

    // return this.authService.userSubject.pipe(
    return this.store.select('auth').pipe(
      take(1),
      //
      map(authState => {
        return authState.user;
      }),
      //
      map(user => {
        const isAuth = !!user;
        if (isAuth) {
          return true;
        }
        return this.router.createUrlTree(['/auth']);
      }),
    )
  }
}
