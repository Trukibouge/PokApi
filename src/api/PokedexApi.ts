import {Pokedex} from "../Pokedex/Pokedex";

export interface PokedexApi{
    id: string;
    name: string;
    discoveredPokemonsCount: number;
}

export function toPokedexApi(pokedex: Pokedex): PokedexApi {
    return{
        id: pokedex.id,
        name: pokedex.name,
        discoveredPokemonsCount: pokedex.getDiscoveredPokemons().length
    }
}