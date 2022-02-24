import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  constructor(private authService: AuthService,
            private router: Router) { }

  ngOnInit() { 

  }
}