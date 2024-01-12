import { IPokemonResults } from "./IPokemonResults";

export interface FavoritePokemon {
    name: string;
    id:number;
    favorite: boolean;
    location_area_encounters: string;
    sprites: {
      front_default: string;
    };
    abilities: Array<IPokemonResultsAbilities>;
    game_indices: Array<IPokemonResultsGame>;
}


export interface IPokemonResultsAbilities {
    ability : IPokemonResults;
    is_hidden : boolean;
}

export interface IPokemonResultsGame {
    version : IPokemonResults;
    game_index : number;
}
