import {randomBytes} from "crypto";
import { Pokemon } from "./Pokemon/Pokemon";

export class Pokedex{
    public id = randomBytes(16).toString('hex');
    constructor(public readonly name: string){}
    private discoveredPokemon = new Map<number, Pokemon>();

    async addPokemon(pokemonId: number){
        let request = await fetch('https://github.com/fanzeyi/pokemon.json/blob/master/pokedex.json', );
        let json = await request.json();

    }
}