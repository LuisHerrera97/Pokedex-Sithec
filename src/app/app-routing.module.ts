import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon.list/pokemon.list.component';
import { PokemonDetailsListComponent } from './components/pokemon.details.list/pokemon.details.list.component';
import { FavoriteListComponent } from './components/favorite.list/favorite.list.component';

const routes: Routes = [
  {path:'', redirectTo: '/list',pathMatch:'full'}, 
  {path:'list', component: PokemonListComponent},
  {path:'favoritos', component: FavoriteListComponent},
  {path:'**',redirectTo: '/home',pathMatch:'full'}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
