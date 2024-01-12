import { IPokemonResults } from "./IPokemonResults";

export interface IPokemon {
    count : string;
    next : string|null;
    previous : string|null;
    results : Array<IPokemonResults>;
}
