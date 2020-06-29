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
import { CadastroUsuarioDialogComponent } from './views/dialogs/cadastro-usuario-dialog/cadastro-usuario-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';

import {MatCardModule } from '@angular/material/card';
import {MatDividerModule } from '@angular/material/divider';
import {MatChipsModule } from '@angular/material/chips';
import {MatTabsModule } from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material/core';
import {MatListModule} from '@angular/material/list';

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
    DuvidaListComponent,
    CadastroUsuarioDialogComponent
  ],
  entryComponents: [CadastroUsuarioDialogComponent]
  ,
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [
    { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'always'} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
