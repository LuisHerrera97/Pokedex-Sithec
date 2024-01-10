import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export const routes: Routes = [
    { path: '', redirectTo: '/pokemon-list', pathMatch: 'full' },
    { path: 'pokemon-list', component: PokemonListComponent },
];

@NgModule({
    imports: [
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        PokemonListComponent,
        RouterModule.forRoot(routes),

    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }