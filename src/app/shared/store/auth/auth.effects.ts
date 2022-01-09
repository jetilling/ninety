import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap, mergeMap } from 'rxjs/operators';
import {
  AuthActionTypes,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
  updateUser,
} from './auth.actions';
import { LoginAction } from './auth.model';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { addLogMessage } from '../../components/logs/store/logs.actions';
 
@Injectable()
export class AuthEffects {
  
  login = createEffect(() =>
    this.actions.pipe(
      ofType(AuthActionTypes.LOGIN),
      exhaustMap((action: LoginAction) => 
        this.authService.login(action.email, action.password).pipe(
          map(() => loginSuccess()),
          catchError(error => {
            console.log('error: ', error)
            return of(addLogMessage({ message: `${error.message}; ${error.error.text}` }))
          })
        )
      )
    )
  );

  loginSuccess = createEffect(() => {
        return this.actions.pipe(
          ofType(AuthActionTypes.LOGIN_SUCCESS),
          tap(() => {
            console.log('in here')
            this.router.navigate(['/dashboard'])
          })
        )},
        { dispatch: false }
  );

  logout = createEffect(() => 
      this.actions.pipe(
        ofType(AuthActionTypes.LOGOUT),
        exhaustMap(() => 
          this.authService.logout().pipe(
            map(() => logoutSuccess()),
            catchError(error => of(logoutFailure({ error })))
          ))
      )
  )

  logoutSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(AuthActionTypes.LOGOUT_SUCCESS),
      tap(() => {
        console.log('in here')
        this.router.navigate(['/login'])
      })
    )},
    { dispatch: false }
  );

  getUser = createEffect(() =>
    this.actions.pipe(
      ofType(AuthActionTypes.GET_USER),
      exhaustMap((action: LoginAction) => 
        this.authService.getUser().pipe(
          mergeMap(user => [
              updateUser(user), 
              addLogMessage({ message: 'retrieved user'}),
              loginSuccess()
            ]
          ),
          catchError(error => {
            console.log('error: ', error)
            return of(addLogMessage({ message: `need to login!` }))
          })
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