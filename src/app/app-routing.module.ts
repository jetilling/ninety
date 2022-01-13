import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { LoginComponent } from './routes/login/login.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { TasksComponent } from './routes/tasks/tasks.component';
import { PreferencesComponent } from './routes/preferences/preferences.component';

const routes: Routes = [ 
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'preferences',
    component: PreferencesComponent,
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
