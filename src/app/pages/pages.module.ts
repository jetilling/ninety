import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../shared/components/components.module';
import { CollectionComponent } from './collection/collection.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule
  ],
  exports: [
    CollectionComponent
  ],
  declarations: [
    CollectionComponent
  ],
  providers: [],
})
export class PagesModule { }
