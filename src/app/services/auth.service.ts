import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { setItem, getItem, removeItem } from '../shared/utilities/storage';
import { Response } from '../interfaces/response';
import { User } from '../interfaces/user';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { addLogMessage } from '../shared/components/logs/store/logs.actions';
import { getUser } from '../shared/store/auth/auth.actions';

@Injectable()
export class AuthService {

  emptyUserObject = {
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    location: null,
    title: null,
    description: null,
    tags: null,
    avatar: null,
    language: "",
    theme: "",
    tfa_secret: null,
    status: "",
    role: "",
    token: null,
    last_access: "",
    last_page: "",
    provider: "",
    external_identifier: null,
    auth_data: null
  }
  
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticatedObservable = this.isAuthenticatedSubject.asObservable()
  currentUer = new BehaviorSubject<User>(this.emptyUserObject)

  constructor(private http: HttpClient,
              private store: Store) { }

  inizializeCSRFProtection() {
    this.http.get('/sanctum/csrf-cookie').subscribe(response => {
      this.store.dispatch(addLogMessage({message: 'initialized csrf token'}))
      this.store.dispatch(getUser())
    });
  }
  
  login(email, password): Observable<any> {
    return this.http.post('/login/response', {email, password});
  }

  logout(): Observable<any> {
    return this.http.post('/logout/response', {});
  }

  getUser(): Observable<any> {
    return this.http.get('/api/user');
  }

  // OLD

  refreshAuthentication(refreshToken) {
    // this.isAuthenticatedSubject.next(false)
    removeItem('ninety-token')
    return this.http.post('/auth/refresh', {refresh_token: refreshToken})
  }

  handlePageReload() {
    const accessToken = getItem('ninety-token');
    if (accessToken) {
      this.isAuthenticatedSubject.next(true)
    }
  }

  getCurrentUser() {
    if (!this.currentUer.value.email) {
      this.http.get('/users/me').subscribe((response: Response) => {
        this.currentUer.next(response.data)
      })
    }
  }

  setAuthTokens(tokens) {
    console.log('tokens: ', tokens)
    setItem('ninety-token', tokens.access_token)
    setItem('ninety-refresh', tokens.refresh_token)
    this.isAuthenticatedSubject.next(true)
  }

}