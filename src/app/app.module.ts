import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CadastroFinanComponent } from './finan/cadastro/cadastro.component';
import { ConsultaFinanComponent } from './finan/consulta/consulta.component';
import { CadastroFinanTypeComponent } from './finantype/cadastro/cadastro.component';
import { ConsultaFinanTypeComponent } from './finantype/consulta/consulta.component';

import { ConfigService } from './services/config.service';
import { FinanService } from './services/finan.service';
import { FinanTypeService } from './services/finantype.service';

import { routing } from './../app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CadastroFinanComponent,
    ConsultaFinanComponent,
    CadastroFinanTypeComponent,
    ConsultaFinanTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [ConfigService, FinanService, FinanTypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
