import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUser } from 'src/app/shared/store/auth/auth.selectors';
import { logout } from '../../store/auth/auth.actions'

@Component({
  selector: 'n-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit{
  user = this.store.select(selectUser);

  constructor(private router: Router, 
              private store: Store) { }

  ngOnInit() { 
    this.user.subscribe(user => {console.log('user: ', user)})
  }

  logout() {
    this.store.dispatch(logout())
  }
}