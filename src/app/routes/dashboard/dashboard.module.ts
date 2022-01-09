import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../../shared/components/components.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
  ],
  exports: [
    DashboardComponent,
  ],
  declarations: [
    DashboardComponent,
  ],
  providers: [],
})
export class DashboardModule { }