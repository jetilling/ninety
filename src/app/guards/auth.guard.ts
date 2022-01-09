import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, catchError } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true
    // return this.authService.isAuthenticatedObservable.pipe(map(authenticated => {
    //   if (authenticated) {
    //     return true
    //   }

    //   this.router.navigate(['/login'])
    //   return false
    // }))
  }
}