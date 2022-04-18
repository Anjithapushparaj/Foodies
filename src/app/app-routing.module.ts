import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { RestourentsComponent } from './restourents/restourents.component';
import { FoodItemsComponent } from './food-items/food-items.component';
import { AddRestourentComponent } from './restourents/add-restourent/add-restourent.component';
import {ListRestourentComponent} from './restourents/list-restourent/list-restourent.component';

const routes: Routes = [
  {
    path:'restaurents',
    component: ListRestourentComponent
  },
  {
    path: 'food-items',
    component: FoodItemsComponent
  },
  {
    path: 'add-restourent',
    component: AddRestourentComponent
  },
  {
    path: '',
    redirectTo: '/restaurents',
    pathMatch: 'full'
    }
// {
//     path: '**',
//     component: dComponent
//     }     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
