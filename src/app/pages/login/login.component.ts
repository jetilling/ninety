import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {

  email = ""
  password = ""

  constructor(private authService: AuthService) { }

  ngOnInit() { }

  handleEmailChange(target) {
      this.email = target.value
  }

  handlePasswordChange(target) {
    this.password = target.value
  }

  login() {
    if (this.email && this.password) {
      this.authService.login(this.email, this.password)
    }
  }

}