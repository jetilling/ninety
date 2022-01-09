import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { logout } from '../../shared/store/auth/auth.actions'

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit{

  subscriptions = []
  collections = []
  currentUserName = ''

  constructor(private router: Router, 
              private store: Store) { }

  ngOnInit() { 

  }


  viewCollection(collection) {
    this.router.navigate(['dashboard/c', collection.name])
  }

  logout() {
    this.store.dispatch(logout())
  }
}