import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {PokedexService} from "../pokedex.service";
import {Pokemon} from "./Pokemon";

@Controller('pokedexes/:id/pokemons')
export class PokemonController{
    constructor(private readonly pokeRepo: PokedexService){}

    @Get()
    getDiscoveredPokemons(@Param('id') id: string): Promise<Pokemon[]>{
        return Promise.resolve(this.pokeRepo.findById(id).then(dex => dex.getDiscoveredPokemons()));
    }

    @Post()
    async addDiscoveredPokemon(@Param('id') id: string, @Body() pokeName: string): Promise<Pokemon>{
        const targetDex = await this.pokeRepo.findById(id);
        const addedPokemon = targetDex.getPokemonInformationByName(pokeName);
        targetDex.addDiscoveredPokemon(addedPokemon);
        return Promise.resolve(addedPokemon);
    }
}