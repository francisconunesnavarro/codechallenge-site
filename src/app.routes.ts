import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroFinanComponent } from './app/finan/cadastro/cadastro.component';
import { ConsultaFinanComponent } from './app/finan/consulta/consulta.component';
import { CadastroFinanTypeComponent } from './app/finantype/cadastro/cadastro.component';
import { ConsultaFinanTypeComponent } from './app/finantype/consulta/consulta.component';

const appRoutes: Routes = [
    { path: '', component: ConsultaFinanComponent },
    { path: 'cadastro-finan', component: CadastroFinanComponent },
    { path: 'cadastro-finan/:codigo', component: CadastroFinanComponent },
    { path: 'consulta-finan', component: ConsultaFinanComponent },
    { path: 'cadastro-finantype/', component: CadastroFinanTypeComponent },
    { path: 'cadastro-finantype/:codigo', component: CadastroFinanTypeComponent },
    { path: 'consulta-finantype', component: ConsultaFinanTypeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
