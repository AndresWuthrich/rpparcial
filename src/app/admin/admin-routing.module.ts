import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaPizzaComponent } from '../pages/alta-pizza/alta-pizza.component';
import { AdminComponent } from './admin.component';
import { SalenPizzasComponent } from './salen-pizzas/salen-pizzas.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'altapizza', component: AltaPizzaComponent },  
  { path: 'salenpizzas', component: SalenPizzasComponent }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
