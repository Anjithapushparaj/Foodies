import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestourentsComponent } from './restourents.component';
import { AddRestourentComponent } from './add-restourent/add-restourent.component';
import { ListRestourentComponent } from './list-restourent/list-restourent.component';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    RestourentsComponent,
    AddRestourentComponent,
    ListRestourentComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class RestourentsModule { }
