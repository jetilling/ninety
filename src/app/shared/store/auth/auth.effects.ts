import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of, from } from 'rxjs';
import { catchError, exhaustMap, map, tap, mergeMap } from 'rxjs/operators';
import {
  AuthActionTypes,
  loginSuccess,
  loginFailure,
  logout,
  getUser,
  updateUser,
} from './auth.actions';
import { LoginAction } from './auth.model';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { addLogMessage } from '../../components/logs/store/logs.actions';
import { clearLastKnownRoute, getLastKnownRoute } from '../../utilities/utilities';
 
@Injectable()
export class AuthEffects {
  
  login = createEffect(() =>
    this.actions.pipe(
      ofType(AuthActionTypes.LOGIN),
      exhaustMap((action: LoginAction) => 
        this.authService.login(action.email, action.password).pipe(
          map(() => getUser()),
          catchError(error => of(addLogMessage({ message: `${error.message}; ${error.error.text}` })))
        )
      )
    )
  );

  loginSuccess = createEffect(() => {
        return this.actions.pipe(
          ofType(AuthActionTypes.LOGIN_SUCCESS),
          tap(() => {
            const lastKnownRoute = getLastKnownRoute()
            console.log('lastKnownRoute: ', lastKnownRoute)
            this.router.navigate([lastKnownRoute])
          })
        )},
        { dispatch: false }
  );

  logout = createEffect(() => 
      this.actions.pipe(
        ofType(AuthActionTypes.LOGOUT),
        exhaustMap(() => 
          this.authService.logout().pipe(
            map(() => {
              clearLastKnownRoute()
              this.router.navigate(['/login'])
              return addLogMessage({ message: 'logged out'})
            }),
            catchError(() => {
              this.router.navigate(['/login'])
              return of(addLogMessage({ message: 'logged out'}))
            })
          ))
      )
  )

  getUser = createEffect(() =>
    this.actions.pipe(
      ofType(AuthActionTypes.GET_USER),
      exhaustMap((action: LoginAction) => 
        this.authService.getUser().pipe(
          mergeMap(user => [
              updateUser({ user }), 
              addLogMessage({ message: 'retrieved user' }),
              loginSuccess()
            ]
          ),
          catchError(error => from([addLogMessage({ message: 'need to login!' }), logout()]))
        )
      )
    )
  );

 
  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}