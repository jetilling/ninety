import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { FormCardComponent } from './form-card/form-card.component';
import { InputComponent } from './input/input.component';
import { LabelComponent } from './label/label.component';
import { LogsComponent } from './logs/logs.component';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';

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
    TabsComponent,
    TableComponent,
    LogsComponent,
  ],
  declarations: [
    InputComponent,
    ButtonComponent,
    FormCardComponent,
    LabelComponent,
    TabsComponent,
    TableComponent,
    LogsComponent,
  ],
  providers: [],
})
export class ComponentsModule { }
