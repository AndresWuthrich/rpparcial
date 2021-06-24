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
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { environment } from 'src/environments/environment';
import { ListadoRepartidorComponent } from './componentes/listado-repartidor/listado-repartidor.component';
import { InfoRepartidorComponent } from './componentes/info-repartidor/info-repartidor.component';
import { AltaPizzaComponent } from './pages/alta-pizza/alta-pizza.component';
import { ListadoPizzaComponent } from './componentes/listado-pizza/listado-pizza.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { ListadoPaisComponent } from './componentes/listado-pais/listado-pais.component';
import { PaisRepartidorComponent } from './componentes/pais-repartidor/pais-repartidor.component';
import { ModificaPizzaComponent } from './componentes/modifica-pizza/modifica-pizza.component';
import { BajaPizzaComponent } from './componentes/baja-pizza/baja-pizza.component';
import { GestionPizzaComponent } from './pages/gestion-pizza/gestion-pizza.component';
import { GestionRepartoComponent } from './pages/gestion-reparto/gestion-reparto.component';
import { AltaRepartoComponent } from './pages/alta-reparto/alta-reparto.component';
import { ListadoPizzaSelComponent } from './componentes/listado-pizza-sel/listado-pizza-sel.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    LoginComponent,
    AltaRepartidorComponent,
    RepartidorDetalleComponent,
    SalenPizzasComponent,
    PageNotFoundComponent,
    NavbarComponent,
    ListadoRepartidorComponent,
    InfoRepartidorComponent,
    AltaPizzaComponent,
    ListadoPizzaComponent,
    RegistroComponent,
    ListadoPaisComponent,
    PaisRepartidorComponent,
    ModificaPizzaComponent,
    BajaPizzaComponent,
    GestionPizzaComponent,
    GestionRepartoComponent,
    AltaRepartoComponent,
    ListadoPizzaSelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
