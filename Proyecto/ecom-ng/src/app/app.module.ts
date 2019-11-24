import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ClienteIndexComponent } from './cliente-index/cliente-index.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { CapacitacionIndexComponent } from './capacitacion-index/capacitacion-index.component';
import { EgresadoIndexComponent } from './egresado-index/egresado-index.component';
import { CapacitacionFormComponent } from './capacitacion-form/capacitacion-form.component';
import { EgresadoFormComponent } from './egresado-form/egresado-form.component';
import { PersonaIndexComponent } from './persona-index/persona-index.component';
import { EgresadoDatosIndexComponent } from './egresado-datos-index/egresado-datos-index.component';
import { DatosGeneralesIndexComponent } from './datos-generales-index/datos-generales-index.component';
import { ComentariodatosIndexComponent } from './comentariodatos-index/comentariodatos-index.component';
import { OfertaLaboralComponent } from './oferta-create/oferta-laboral.component';
import { PerfilegresadoComponent } from './perfilegresado/perfilegresado.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { ComentariosenviosIndexComponent } from './comentariosenvios-index/comentariosenvios-index.component';
import { CursosoferIndexComponent } from './cursosofer-index/cursosofer-index.component';
import { OfertalabIndexComponent } from './ofertalab-index/ofertalab-index.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },

  { path: 'clienteindex',  component: ClienteIndexComponent },
  { path: 'clienteform',  component: ClienteFormComponent },
  { path: 'clienteform/:id',  component: ClienteFormComponent },


  { path: 'comentarioenvio',  component: ComentariosenviosIndexComponent },


  { path: 'curosofer',  component: CursosoferIndexComponent },

  { path: 'comentarioindex',  component: ComentariodatosIndexComponent },

  { path: 'egresadodatosindex',  component: EgresadoDatosIndexComponent },
  { path: 'egresadodatosform',  component: EgresadoDatosIndexComponent },
  { path: 'egresadodatosindex/:id',  component: EgresadoDatosIndexComponent },

  { path: 'datosgeneralesindex',  component: DatosGeneralesIndexComponent },
  { path: 'datosgeneralesform',  component: DatosGeneralesIndexComponent },
  { path: 'datosgeneralesindex/:id',  component: DatosGeneralesIndexComponent },

  { path: 'capacitacionindex',  component: CapacitacionIndexComponent },
  { path: 'capacitacionform',  component: CapacitacionFormComponent },
  { path: 'capacitacionform/:id',  component: CapacitacionFormComponent },

  { path: 'egresadoindex',  component: EgresadoIndexComponent },
  { path: 'egresadoform',  component: EgresadoFormComponent },
  { path: 'egresadoform/:id',  component: EgresadoFormComponent },


  { path: 'personaindex',  component: PersonaIndexComponent },
  { path: 'personaform',  component: PersonaIndexComponent },
  { path: 'personaform/:id',  component: PersonaIndexComponent },


  
  { path: 'oferta_laboral',  component: OfertaLaboralComponent },
  { path: 'oferta_laboral',  component: OfertaLaboralComponent },
  { path: 'oferta_laboral/:id',  component: OfertaLaboralComponent },

  { path: 'ofertaindex',  component: OfertalabIndexComponent },


  { path: 'perfilegresado',  component: PerfilegresadoComponent },
  { path: 'perfilegresado',  component: PerfilegresadoComponent },
  { path: 'perfilegresado/:id',  component: PerfilegresadoComponent },

  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    CartComponent,
    ShippingComponent,
    ClienteIndexComponent,
    ClienteFormComponent,
    CapacitacionIndexComponent,
    EgresadoIndexComponent,
    CapacitacionFormComponent,
    EgresadoFormComponent,
    PersonaIndexComponent,
    EgresadoDatosIndexComponent,
    DatosGeneralesIndexComponent,
    ComentariodatosIndexComponent,
    OfertaLaboralComponent,
    PerfilegresadoComponent,
    FilterPipe,
    ComentariosenviosIndexComponent,
    CursosoferIndexComponent,
    OfertalabIndexComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
