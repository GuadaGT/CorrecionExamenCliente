import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./components/inicio/inicio.component";
import {MarvelAllComponent} from "./components/marvel-all/marvel-all.component";
import {MarvelOneComponent} from "./components/marvel-one/marvel-one.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'marvel',
    component: MarvelAllComponent,
  },
  {
    path: 'marvel/:id',
    component: MarvelOneComponent,
  },
  {
    path: '**',
    redirectTo: '/inicio',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
