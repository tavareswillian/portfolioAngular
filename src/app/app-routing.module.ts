import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { UsuarioListComponent } from './views/usuario-list/usuario-list.component';
import { DocumentoListComponent } from './views/documento-list/documento-list.component';


const routes: Routes = [
  {
    path: '',
    component:  HomeComponent
  },
  {
    path: 'home',
    component:  HomeComponent
  },
  {
    path: 'usuario',
    component:  UsuarioListComponent
  },
  {
    path: 'documento',
    component:  DocumentoListComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
