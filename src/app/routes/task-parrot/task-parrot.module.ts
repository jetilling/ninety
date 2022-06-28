import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../../shared/components/components.module';
import { TaskParrotCardComponent } from './app-list-card/task-parrot-card.component';
import { PreferencesComponent } from './routes/preferences/preferences.component';
import { TasksComponent } from './routes/tasks/tasks.component';
import { TaskParrotRoutingModule } from './task-parrot-routing.module';
import { TaskParrotComponent } from './task-parrot.component';

@NgModule({
  imports: [
    ComponentsModule,
    FormsModule,
    TaskParrotRoutingModule,
    CommonModule,
    RouterModule,
  ],
  exports: [TaskParrotCardComponent],
  declarations: [
    TaskParrotComponent,
    TasksComponent,
    PreferencesComponent,
    TaskParrotCardComponent,
  ],
  providers: [],
})
export class TaskParrotModule {}
