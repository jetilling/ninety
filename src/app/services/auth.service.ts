import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { setItem, getItem, removeItem } from '../utilities/storage';
import { Response } from '../interfaces/response';
import { User } from '../interfaces/user';
import { BehaviorSubject, of } from 'rxjs';

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

  constructor(private http: HttpClient) { }
  
  login(email, password) {
    this.http.post('/auth/login', {email, password}).subscribe((response: Response) => {
        this.setAuthTokens(response.data)
    })
  }

  refreshAuthentication(refreshToken) {
    this.isAuthenticatedSubject.next(false)
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
        console.log(response)
        this.currentUer.next(response.data)
      })
    }
  }

  setAuthTokens(tokens) {
    setItem('ninety-token', tokens.access_token)
    setItem('ninety-refresh', tokens.refresh_token)
    this.isAuthenticatedSubject.next(true)
  }

}