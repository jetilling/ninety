import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule
  ],
  exports: [
    LoginComponent,
    DashboardComponent,
  ],
  declarations: [
    LoginComponent,
    DashboardComponent,
  ],
  providers: [],
})
export class PagesModule { }
