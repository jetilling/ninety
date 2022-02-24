import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { FormCardComponent } from './form-card/form-card.component';
import { InputComponent } from './input/input.component';
import { LabelComponent } from './label/label.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    FormCardComponent,
    LabelComponent,
  ],
  declarations: [
    InputComponent,
    ButtonComponent,
    FormCardComponent,
    LabelComponent,
  ],
  providers: [],
})
export class ComponentsModule { }
