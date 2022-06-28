import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../../shared/components/components.module';
import { TaskParrotModule } from '../task-parrot/task-parrot.module';
import { AppListComponent } from './app-list.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    ComponentsModule,
    TaskParrotModule,
    RouterModule,
  ],
  exports: [
    AppListComponent,
  ],
  declarations: [
    AppListComponent,
  ],
  providers: [],
})
export class AppListModule { }