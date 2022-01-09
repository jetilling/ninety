import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../../shared/components/components.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
  ],
  exports: [
    LoginComponent,
  ],
  declarations: [
    LoginComponent,
  ],
  providers: [],
})
export class LoginModule { }