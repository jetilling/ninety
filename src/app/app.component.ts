import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { AuthService } from './services/auth.service';
// import { getItem } from './shared/utilities/storage';
import { filter } from 'rxjs';
import { setLastKnownRoute } from './shared/utilities/utilities';
import { ignoredRoutes } from './shared/utilities/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ninety';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.inizializeCSRFProtection();

    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event: NavigationStart) => {
        if (!ignoredRoutes.includes(event.url)) {
          setLastKnownRoute(event.url);
        }
      });
  }
}
