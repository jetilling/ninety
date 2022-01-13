import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'preferences',
  templateUrl: 'preferences.component.html',
  styleUrls: ['preferences.component.css']
})

export class PreferencesComponent implements OnInit{

  constructor(private router: Router, 
              private store: Store) { }

  ngOnInit() { 

  }
}