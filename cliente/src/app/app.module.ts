import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {routing, appRoutingProviders } from './app.routing'


import { AppComponent } from './app.component';
import { DirectorComponent } from './components/director/director.component';
import { LocutorComponent } from './components/locutor/locutor.component';
import { PropagandaComponent } from './components/propaganda/propaganda.component';
import { TemamusicalComponent } from './components/temamusical/temamusical.component';
import { PeriodoComponent } from './components/periodo/periodo/periodo.component';
import { ProgramaComponent } from './components/programa/programa/programa.component';
import { ErrorComponent } from './components/error/error.component';
import { GestionradioComponent } from './components/gestionradio/gestionradio.component';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { AltaProgramaComponent } from './components/programa/alta-programa/alta-programa.component';
import { AltaPeriodoComponent } from './components/periodo/alta-periodo/alta-periodo.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectorComponent,
    LocutorComponent,
    PropagandaComponent,
    TemamusicalComponent,
    PeriodoComponent,
    ProgramaComponent,
    ErrorComponent,
    GestionradioComponent,
    ConsultasComponent,
    AltaProgramaComponent,
    AltaPeriodoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
