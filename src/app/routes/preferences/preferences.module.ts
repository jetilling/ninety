import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../../shared/components/components.module';
import { PreferencesComponent } from './preferences.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
  ],
  exports: [
    PreferencesComponent,
  ],
  declarations: [
    PreferencesComponent,
  ],
  providers: [],
})
export class PreferencesModule { }