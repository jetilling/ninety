import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { CollectionComponent } from './collection/collection.component';
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
    CollectionComponent
  ],
  declarations: [
    LoginComponent,
    DashboardComponent,
    CollectionComponent
  ],
  providers: [],
})
export class PagesModule { }
