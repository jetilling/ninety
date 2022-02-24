import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUser } from 'src/app/shared/store/auth/auth.selectors';
import { setLastKnownRoute } from 'src/app/shared/utilities/utilities';
import { logout } from '../../shared/store/auth/auth.actions'

@Component({
  selector: 'app-list',
  templateUrl: 'app-list.component.html',
  styleUrls: ['app-list.component.css']
})

export class AppListComponent implements OnInit{
  // user = this.store.select(selectUser);

  constructor(private router: Router, 
              private store: Store) { }

  ngOnInit() { 
  }

  logout() {
    this.store.dispatch(logout())
  }

  navigate(url) {
    setLastKnownRoute(url)
    this.router.navigate([url])
  }
}