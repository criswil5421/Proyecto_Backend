import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ClienteIndexComponent } from './cliente-index/cliente-index.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { CapacitacionIndexComponent } from './capacitacion-index/capacitacion-index.component';
import { EgresadoIndexComponent } from './egresado-index/egresado-index.component';
import { CapacitacionFormComponent } from './capacitacion-form/capacitacion-form.component';
import { EgresadoFormComponent } from './egresado-form/egresado-form.component';
import { OfertaCursoComponent } from './oferta-curso/oferta-curso.component';
import { IndexofertaComponent } from './indexoferta/indexoferta.component';
import { InterfazComponent } from './interfaz/interfaz.component';
import { LoginComponent } from './login/login.component';
import { PanelEgresadoComponent } from './panel-egresado/panel-egresado.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products',  component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'shipping', component: ShippingComponent },

  { path: 'clienteindex',  component: ClienteIndexComponent },
  { path: 'clienteform',  component: ClienteFormComponent },
  { path: 'clienteform/:id',  component: ClienteFormComponent },

  { path: 'capacitacionindex',  component: CapacitacionIndexComponent },
  { path: 'capacitacionform',  component: CapacitacionFormComponent },
  { path: 'capacitacionform/:id',  component: CapacitacionFormComponent },

  { path: 'egresadoindex',  component: EgresadoIndexComponent },
  { path: 'egresadoform',  component: EgresadoFormComponent },
  { path: 'egresadoform/:id',  component: EgresadoFormComponent },

  { path: 'indexoferta',  component: IndexofertaComponent },
  { path: 'indexoferta',  component: IndexofertaComponent },
  { path: 'indexoferta/:id',  component: IndexofertaComponent },

  { path: 'oferta-curso',  component: OfertaCursoComponent },
  { path: 'oferta-curso',  component: OfertaCursoComponent },
  { path: 'oferta-curso/:id',  component: OfertaCursoComponent },

  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HomeComponent,
    PageNotFoundComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    ClienteIndexComponent,
    ClienteFormComponent,
    CapacitacionIndexComponent,
    EgresadoIndexComponent,
    CapacitacionFormComponent,
    EgresadoFormComponent,
    OfertaCursoComponent,
    IndexofertaComponent,
    InterfazComponent,
    LoginComponent,
    PanelEgresadoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
