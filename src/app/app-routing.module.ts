import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { LoginComponent } from './routes/login/login.component';
import { TasksComponent } from './routes/task-dude/routes/tasks/tasks.component';
import { AppListComponent } from './routes/app-list/app-list.component';
import { TaskDudeComponent } from './routes/task-dude/task-dude.component';

const routes: Routes = [ 
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'task-dude',
    component: TaskDudeComponent,
    loadChildren: () => import('./routes/task-dude/task-dude.module').then(m => m.TaskDudeModule),
    canActivate: [AuthGuard],
  }, 
  {
    path: 'apps',
    component: AppListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
