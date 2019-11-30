import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {PokedexService} from "../pokedex.service";
import {Pokemon} from "./Pokemon";
import {PokemonCreationDTO} from "./PokemonCreationDTO";
import {PokemonApi, toPokemonApi} from "../../api/PokemonApi";

@Controller('pokedexes/:id/pokemons')
export class PokemonController{
    constructor(private readonly pokeRepo: PokedexService){}

    @Get()
    async getDiscoveredPokemons(@Param('id') id: string): Promise<PokemonApi[]>{
        const discoveredMap = await this.pokeRepo.findById(id).then(pokedex => pokedex.getDiscoveredPokemons());
        return Promise.resolve(discoveredMap.map(toPokemonApi));
    }

    @Post()
    async addDiscoveredPokemon(@Param('id') id: string, @Body() pokemonDTO: PokemonCreationDTO): Promise<PokemonApi>{
        const targetDex = await this.pokeRepo.findById(id);
        const addedPokemon = targetDex.getPokemonInformationByName(pokemonDTO.name);
        targetDex.addDiscoveredPokemon(addedPokemon);
        return Promise.resolve(toPokemonApi(addedPokemon));
    }

    @Get('information/:name')
    async getInformation(@Param('id') id: string, @Param('name') name: string): Promise<PokemonApi>{
        const pokemon = await this.pokeRepo.findById(id).then(pokedex => pokedex.getPokemonInformationByName(name));
        return toPokemonApi(pokemon);
    }
}