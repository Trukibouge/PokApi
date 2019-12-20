import {Controller, Get, Param} from "@nestjs/common";
import {PokemonApi, toPokemonApi} from "../api/PokemonApi";
import {Pokedex} from "./Pokedex";
import {PokedexService} from "./pokedex.service";

@Controller('pokemoninformation')
export class InformationController {
    constructor(private readonly pokeRepo: PokedexService) {
    }

    @Get(':name')
    async getPokemonInformation(@Param('name') name: string): Promise<PokemonApi> {
        let newPokedex = await new Pokedex("temp");
        await newPokedex.fillPokemonMap();
        const pokemon = await newPokedex.getPokemonInformationByName(name);
        return toPokemonApi(pokemon);
    }

    @Get()
    async getAllPokemonInformation(): Promise<PokemonApi[]> {
        let newPokedex = await new Pokedex("temp");
        await newPokedex.fillPokemonMap();
        const informationMap = await newPokedex.getAllPokemons();
        return Promise.resolve(informationMap.map(toPokemonApi));
    }
}