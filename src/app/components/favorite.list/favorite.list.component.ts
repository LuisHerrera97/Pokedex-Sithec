import { Component } from '@angular/core';
import { FavoritePokemon } from 'src/app/interfaces/favorite.pokemon';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-favorite.list',
  templateUrl: './favorite.list.component.html',
  styleUrls: ['./favorite.list.component.css']
})
export class FavoriteListComponent {
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
  constructor(private apiService : PokedexService){
    this.getLocal();
  }
  getLocal():void{
    const newData=this.apiService.getLocalStorage();
    if(newData!= null){
      this.favoritos=newData;
    }else{
      this.favoritos=[];
    }
  }
  setDetails(item:any):void{
    this.single=item;
    this.setView(2);
  }
  
  setView(i:number){
    this.view=i;
  }
  deleteNewFovorite():void{
    this.favoritos.forEach( (item, index) => {
      if(item.id === this.single.id) this.favoritos.splice(index,1);
    });
    this.apiService.setLocalStorage(JSON.stringify(this.favoritos));
    this.single.favorite=false;
  }
  saveNewFavorite():void{
    this.favoritos.push(this.single);
    this.apiService.setLocalStorage(JSON.stringify(this.favoritos));
    this.single.favorite=true;
  }
}
