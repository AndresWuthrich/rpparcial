import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'bienvenida', component: BienvenidaComponent},
  { path: '', redirectTo: 'bienvenida', pathMatch: 'full'},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
