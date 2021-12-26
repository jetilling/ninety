import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, switchMap, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { getItem, setItem } from '../utilities/storage';
import { AuthService } from './auth.service';
import { Response } from '../interfaces/response';

@Injectable()
export class UrlInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  private handleAuthError(err: HttpErrorResponse, request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    if (err.status === 401 || err.status === 403) {
        let refreshToken = getItem('ninety-refresh')

        // maybe call refreshAuthentication once (have a thing that doesn't call this twice)
        // then subscribe to refreshtoken completed observable
        return this.authService.refreshAuthentication(refreshToken).pipe(switchMap((response: Response) => {
          this.authService.setAuthTokens(response.data)
          request = request.clone({ headers: request.headers.set('Authorization', `Bearer ${response.data.access_token}`) });
          return next.handle(request)
        }))
    }
    return throwError(() => new Error('error ocurred'));
}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let accessToken = getItem('ninety-token');

    if (accessToken) {
      req = req.clone({ headers: req.headers.set('Authorization', `Bearer ${accessToken}`) });
    }

    const updatedUrlReq = req.clone({
      url: `${environment.baseUrl}${req.url}`,
      headers: req.headers.set('content-type', 'application/json')
        .set('accept', 'application/json')
    })
    return next.handle(updatedUrlReq).pipe(catchError(error => this.handleAuthError(error, updatedUrlReq, next)));
  }
}