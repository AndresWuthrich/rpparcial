import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { AltaRepartidorComponent } from './pages/alta-repartidor/alta-repartidor.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { GestionRepartoComponent } from './pages/gestion-reparto/gestion-reparto.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RepartidorDetalleComponent } from './pages/repartidor-detalle/repartidor-detalle.component';

const routes: Routes = [
  { path: 'bienvenida', component: BienvenidaComponent},
  { path: '', redirectTo: 'bienvenida', pathMatch: 'full'},
  { path: 'altarepartidor', component: AltaRepartidorComponent },
  { path: 'repartidordetalle', component: RepartidorDetalleComponent },
  { path: 'gestionreparto', component: GestionRepartoComponent },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [AdminGuard] },
  // { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
