import {Pokemon} from "../Pokedex/Pokemon/Pokemon";

export interface PokemonApi{
    id: number;
    name: {
        english: string,
        french: string,
        japanese: string,
        chinese: string
    };
    type: String[];
    base: {
        HP: number;
        Attack: number;
        Defense: number;
        SpAttack: number;
        SpDefense: number;
        Speed: number
    }
}

export function toPokemonApi(pokemon: Pokemon): PokemonApi {
    return{
        id: pokemon.id,
        name: {
            english: pokemon.name.english,
            japanese: pokemon.name.japanese,
            chinese: pokemon.name.chinese,
            french: pokemon.name.french
        },
        type: pokemon.type,
        base: {
            HP: pokemon.base.HP,
            Attack: pokemon.base.Attack,
            Defense: pokemon.base.Defense,
            SpAttack: pokemon.base.SpAttack,
            SpDefense: pokemon.base.SpDefense,
            Speed: pokemon.base.Speed
        }
    }
}