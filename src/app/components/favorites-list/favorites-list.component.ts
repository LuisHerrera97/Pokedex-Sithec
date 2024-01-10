import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';
import { FavoritePokemon } from '../../interfaces/favoritePokemon';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css']
})
export class FavoritesListComponent implements OnInit {
  favoritePokemons: FavoritePokemon[] = [];

  constructor(private pokedexService: PokedexService) {}

  ngOnInit(): void {
    // Cargar la lista de favoritos al inicio
  }

  removeFromFavorites(favorite: FavoritePokemon): void {
    // Implementa lógica para quitar de favoritos
  }
}