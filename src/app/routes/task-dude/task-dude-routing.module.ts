import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PreferencesComponent } from './routes/preferences/preferences.component';
import { TasksComponent } from './routes/tasks/tasks.component';
import { TaskDudeComponent } from './task-dude.component';

const routes: Routes = [ 
  
      {
        path: 'tasks',
        component: TasksComponent
      },
      {
        path: 'preferences',
        component: PreferencesComponent,
      }
    
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskDudeRoutingModule { }
