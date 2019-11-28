import {Injectable} from "@nestjs/common";
import {Pokemon} from "./Pokemon/Pokemon";
import {Pokedex} from "./Pokedex";

const fetch = require("node-fetch");
const pokedexJsonUrl = 'https://raw.githubusercontent.com/Trukibouge/pokemon.json/master/pokedex.json';

@Injectable()
export class PokedexService{

    private pokemonList: Map<number, Pokemon>;
    private pokedexMap = new Map<string, Pokedex>();

    constructor(){
        this.initializePokemonList().then();
    }

    savePokedex(pokedex: Pokedex): Promise<void>{
        this.pokedexMap.set(pokedex.id, pokedex);
        return Promise.resolve();
    }

    getAllPokedex(): Promise<Pokedex[]>{
        return Promise.resolve(Array.from(this.pokedexMap.values()));
    }

    findById(id: string): Promise<Pokedex> {
        const pokedex = this.pokedexMap.get(id);
        if (!pokedex) {
            return Promise.reject('Pokedex with id ${id} not found');
        }
        return Promise.resolve(pokedex);
    }

    removePokedex(id: string): Promise<void>{
        const pokedex = this.pokedexMap.get(id);
        if(!pokedex){
            return Promise.reject('Pokedex with id ${id} not found');
        }
        else{
            this.pokedexMap.delete(id);
            return Promise.resolve();
        }

    }

    async initializePokemonList(): Promise<Map<number, Pokemon>>{
        let pokeListRaw = await fetch(pokedexJsonUrl).json();
        let pokeList = new Map<number, Pokemon>();
        pokeListRaw().forEach((pokemon) => this.pokemonList.set(pokemon.id, pokemon));
        if(!pokeList){
            return Promise.reject('Pokedex data fetch failed');
        }
        else{
            return Promise.resolve(pokeList);
        }
    }

    // async discoverPokemon(pokemonId: number){
    //     let pokemonList : Pokemon[];
    //     let request = await fetch(pokedexJsonUrl);
    //     pokemonList = await request.json();
    //     this.discoveredPokemon.set(pokemonId+1, pokemonList[pokemonId]);
    //     console.log(this.discoveredPokemon.get(pokemonId+1));
    //  }
}