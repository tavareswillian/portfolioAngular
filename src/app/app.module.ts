import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { UsuarioListComponent } from './views/usuario-list/usuario-list.component';
import { PerfilListComponent } from './views/perfil-list/perfil-list.component';
import { PermissaoListComponent } from './views/permissao-list/permissao-list.component';
import { FuncionalidadeListComponent } from './views/funcionalidade-list/funcionalidade-list.component';
import { PoliticaListComponent } from './views/politica-list/politica-list.component';
import { ListaListComponent } from './views/lista-list/lista-list.component';
import { RepositorioListComponent } from './views/repositorio-list/repositorio-list.component';
import { DocumentoListComponent } from './views/documento-list/documento-list.component';
import { DuvidaListComponent } from './views/duvida-list/duvida-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsuarioListComponent,
    PerfilListComponent,
    PermissaoListComponent,
    FuncionalidadeListComponent,
    PoliticaListComponent,
    ListaListComponent,
    RepositorioListComponent,
    DocumentoListComponent,
    DuvidaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
