import { Component } from '@angular/core';
import { FavoritePokemon } from 'src/app/interfaces/favorite.pokemon';
import { IPokemon } from 'src/app/interfaces/pokemon';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-pokemon.list',
  templateUrl: './pokemon.list.component.html',
  styleUrls: ['./pokemon.list.component.css']
})
export class PokemonListComponent {
  data: IPokemon={
    count: '',
    next: null,
    previous: null,
    results: []
  }
  view:number=1;
  single : FavoritePokemon={
    id:0,
    name: '',
    favorite: false,
    location_area_encounters: '',
    sprites: {
      front_default: ''
    },
    abilities: [],
    game_indices: []
  }
  favoritos : Array<FavoritePokemon> = [];
  limit:number=12;
  limits : Array<number> = [12,24,36,60];
  constructor(private apiService : PokedexService){
    this.getList();
    this.getLocal();
  }
  setView(i:number){
    this.view=i;
  }
  getList():void{
    this.apiService.getPokemons(this.limit,0).subscribe(data=>{
      console.log(data);
      this.data=data;
    })
  }
  getListByUrl(url:string|null):void{
    this.apiService.getPokemonsByUrl(url!).subscribe(data=>{
      this.data=data;
    })
  }

  validatePrevious():boolean{
    return this.data.previous==null;
  }
  getLocal():void{
    const newData=this.apiService.getLocalStorage();
    if(newData!= null){
      this.favoritos=newData;
    }else{
      this.favoritos=[];
    }
  }

  getDetails(url:string):void{
    this.apiService.getPokemonDetails(url).subscribe(data=>{
      this.single=data;
      const found = this.favoritos.find((element) => element.id == this.single.id);
      if(found!=undefined){
        this.single.favorite=true;
      }
      this.setView(2);
    })
  }
  saveNewFavorite():void{
    this.favoritos.push(this.single);
    this.apiService.setLocalStorage(JSON.stringify(this.favoritos));
    this.single.favorite=true;
  }
  deleteNewFovorite():void{
    this.favoritos.forEach( (item, index) => {
      if(item.id === this.single.id) this.favoritos.splice(index,1);
    });
    this.apiService.setLocalStorage(JSON.stringify(this.favoritos));
    this.single.favorite=false;
  }
}
