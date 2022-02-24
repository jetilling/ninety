import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { getItem } from './utilities/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ninety';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.handlePageReload()

    this.authService.isAuthenticatedObservable.subscribe(authenticated => {
      if (authenticated) {
        this.authService.getCurrentUser()
        this.router.navigate(['/dashboard'])
      }
    })
  }
}
