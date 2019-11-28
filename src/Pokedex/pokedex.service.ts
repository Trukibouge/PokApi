import {Injectable} from "@nestjs/common";
import {Pokemon} from "./Pokemon/Pokemon";
import {Pokedex} from "./Pokedex";

@Injectable()
export class PokedexService{

    private pokemonList: Map<number, Pokemon>;
    private pokedexMap = new Map<string, Pokedex>();

    constructor(){}

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

}