import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { DirectorComponent } from './components/director/director.component';
import { LocutorComponent } from './components/locutor/locutor.component';
import { PropagandaComponent } from './components/propaganda/propaganda.component';
import { TemamusicalComponent } from './components/temamusical/temamusical.component';
import { PeriodoComponent } from './components/periodo/periodo/periodo.component';
import { ProgramaComponent } from './components/programa/programa/programa.component';
import { GestionradioComponent } from './components/gestionradio/gestionradio.component';
import { AltaProgramaComponent} from './components/programa/alta-programa/alta-programa.component';
import { AltaPeriodoComponent} from './components/periodo/alta-periodo/alta-periodo.component';
import { ConsultasComponent } from './components/consultas/consultas.component'
import { ErrorComponent } from './components/error/error.component';

const appRoutes: Routes = [
    {path: '', component: GestionradioComponent},    
    {path: 'programas', component: ProgramaComponent},
    {path: 'periodos', component: PeriodoComponent},
    {path: 'directores', component: DirectorComponent},
    {path: 'locutores', component: LocutorComponent},
    {path: 'propagandas', component: PropagandaComponent},
    {path: 'temasmusicales', component: TemamusicalComponent},
    {path: 'gestionradio', component: GestionradioComponent},
    {path: 'altasprogramas', component: AltaProgramaComponent},
    {path: 'altaperiodo', component: AltaPeriodoComponent},
    {path: 'consultas', component: ConsultasComponent},
    {path: '**', component: ErrorComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);