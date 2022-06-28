import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, catchError } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAuthenticated } from '../shared/store/auth/auth.selectors';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // return an auth function - verifyUserAuthenticated
    // assume login is true until it's not
      return this.store.select(selectAuthenticated).pipe(
        map(authenticated => {
          if (!authenticated) {
            // this.router.navigate(['/login'])
            // return false
          }

          return authenticated;
        })
      )

  }
}