import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUser } from 'src/app/shared/store/auth/auth.selectors';
import { logout } from '../../shared/store/auth/auth.actions';

@Component({
  selector: 'task-parrot',
  templateUrl: 'task-parrot.component.html',
  styleUrls: ['task-parrot.component.css']
})

export class TaskParrotComponent implements OnInit{
  user = this.store.select(selectUser);

  constructor(private router: Router, 
              private store: Store) { }

  ngOnInit() { 
  }

  logout() {
    this.store.dispatch(logout())
  }
}