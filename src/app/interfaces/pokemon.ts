export interface Pokemon {
    name: string;
    url: string;
    sprites: {
      front_default: string;
    };
    abilities: {
      ability: {
        name: string;
      };
    }[];
    game_indices: {
      version: {
        name: string;
      };
    }[];
  }