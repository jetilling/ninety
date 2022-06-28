import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { LoginComponent } from './routes/login/login.component';
import { AppListComponent } from './routes/app-list/app-list.component';
import { TaskParrotComponent } from './routes/task-parrot/task-parrot.component';

const routes: Routes = [ 
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'task-parrot',
    component: TaskParrotComponent,
    loadChildren: () => import('./routes/task-parrot/task-parrot.module').then(m => m.TaskParrotModule),
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
