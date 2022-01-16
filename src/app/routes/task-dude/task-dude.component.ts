import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUser } from 'src/app/shared/store/auth/auth.selectors';
import { logout } from '../../shared/store/auth/auth.actions';

@Component({
  selector: 'task-dude',
  templateUrl: 'task-dude.component.html',
  styleUrls: ['task-dude.component.css']
})

export class TaskDudeComponent implements OnInit{
  user = this.store.select(selectUser);

  constructor(private router: Router, 
              private store: Store) { }

  ngOnInit() { 
  }

  logout() {
    this.store.dispatch(logout())
  }
}