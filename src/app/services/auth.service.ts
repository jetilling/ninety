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

}