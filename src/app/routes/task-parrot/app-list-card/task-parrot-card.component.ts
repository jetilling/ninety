import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { setLastKnownRoute } from 'src/app/shared/utilities/utilities';

@Component({
  selector: 'task-parrot-card',
  templateUrl: 'task-parrot-card.component.html',
  styleUrls: ['task-parrot-card.component.css']
})

export class TaskParrotCardComponent implements OnInit{

  constructor(private router: Router) { }

  ngOnInit() { 
  }

  navigate(url) {
    setLastKnownRoute(url)
    this.router.navigate([url])
  }
}