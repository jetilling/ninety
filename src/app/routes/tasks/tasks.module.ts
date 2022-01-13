import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../../shared/components/components.module';
import { TasksComponent } from './tasks.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
  ],
  exports: [
    TasksComponent,
  ],
  declarations: [
    TasksComponent,
  ],
  providers: [],
})
export class TasksModule { }