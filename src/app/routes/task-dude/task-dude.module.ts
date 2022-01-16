import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../../shared/components/components.module';
import { PreferencesComponent } from './routes/preferences/preferences.component';
import { TasksComponent } from './routes/tasks/tasks.component';
import { TaskDudeRoutingModule } from './task-dude-routing.module';
import { TaskDudeComponent } from './task-dude.component';

@NgModule({
  imports: [
    ComponentsModule,
    TaskDudeRoutingModule,
    CommonModule,
    RouterModule,
  ],
  exports: [
    TasksComponent,
  ],
  declarations: [
    TaskDudeComponent,
    TasksComponent,
    PreferencesComponent
  ],
  providers: [],
})
export class TaskDudeModule { }