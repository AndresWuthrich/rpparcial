import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { LoginComponent } from './auth/login/login.component';
import { AltaRepartidorComponent } from './pages/alta-repartidor/alta-repartidor.component';
import { RepartidorDetalleComponent } from './pages/repartidor-detalle/repartidor-detalle.component';
import { SalenPizzasComponent } from './admin/salen-pizzas/salen-pizzas.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    LoginComponent,
    AltaRepartidorComponent,
    RepartidorDetalleComponent,
    SalenPizzasComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
