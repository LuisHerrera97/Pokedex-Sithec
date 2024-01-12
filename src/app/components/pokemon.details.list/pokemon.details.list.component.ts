import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-pokemon.details.list',
  templateUrl: './pokemon.details.list.component.html',
  styleUrls: ['./pokemon.details.list.component.css']
})
export class PokemonDetailsListComponent {
  id: string|null;
  constructor(private aRoute: ActivatedRoute,
    private apiService : PokedexService){
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

}
