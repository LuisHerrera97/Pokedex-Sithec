import { Component, Input, OnInit } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  @Input() pokemonUrl: string = '';
  pokemonDetails: Pokemon = {};

  constructor(private pokedexService: PokedexService) {}

  ngOnInit(): void {
    this.loadPokemonDetails();
  }

  loadPokemonDetails(): void {
    this.pokedexService.getPokemonDetails(this.pokemonUrl).subscribe((data: any) => {
      this.pokemonDetails = data;
    });
  }
}