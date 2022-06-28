import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PreferencesComponent } from './routes/preferences/preferences.component';
import { TasksComponent } from './routes/tasks/tasks.component';

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
export class TaskParrotRoutingModule { }
