import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { addLogMessage } from '../shared/components/logs/store/logs.actions';
import { getUser } from '../shared/store/auth/auth.actions';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private store: Store) {}

  inizializeCSRFProtection() {
    this.http.get('/sanctum/csrf-cookie').subscribe(() => {
      this.store.dispatch(addLogMessage({ message: 'initialized csrf token' }));
      this.store.dispatch(getUser());
    });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post('/login/response', { email, password });
  }

  logout(): Observable<any> {
    return this.http.post('/logout/response', {});
  }

  getUser(): Observable<any> {
    return this.http.get('/api/user');
  }
}
