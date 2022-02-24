import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { login, logout } from '../../shared/store/auth/auth.actions'


@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {

  email = ""
  password = ""

  constructor(private store: Store) { }

  ngOnInit() { }

  handleEmailChange(target) {
      this.email = target.value
  }

  handlePasswordChange(target) {
    this.password = target.value
  }

  login() {
    if (this.email && this.password) {
      
      this.store.dispatch(login({email: this.email, password: this.password}))
    }
  }

  logout() {
    this.store.dispatch(logout())
  }

}