import {Injectable} from "@nestjs/common";
import {Pokemon} from "./Pokemon/Pokemon";
import {Pokedex} from "./Pokedex";

@Injectable()
export class PokedexService{
    private discoveredPokemon: Map<number, Pokedex>;

    // async discoverPokemon(pokemonId: number){
    //     let pokemonList : Pokemon[];
    //     let request = await fetch(pokedexJsonUrl);
    //     pokemonList = await request.json();
    //     this.discoveredPokemon.set(pokemonId+1, pokemonList[pokemonId]);
    //     console.log(this.discoveredPokemon.get(pokemonId+1));
    //  }
}