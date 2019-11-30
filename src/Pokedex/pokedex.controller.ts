import {Body, Controller, Delete, Get, Param, Post} from "@nestjs/common";
import {PokedexService} from "./pokedex.service";
import {Pokedex} from "./Pokedex";
import {PokedexCreationDTO} from "./PokedexDTO";
import {PokedexApi, toPokedexApi} from "../api/PokedexApi";
import {map} from "rxjs/operators";

@Controller('pokedexes')
export class PokedexController{
    constructor(private readonly pokeRepo: PokedexService){}

    @Get()
    async getAll(): Promise<PokedexApi[]> {
        const all = await this.pokeRepo.getAllPokedex();
        return all.map(toPokedexApi);
    }

    @Post()
    async savePokedex(@Body() pokeCreationDto: PokedexCreationDTO): Promise<PokedexApi>{
        let newPokedex = await new Pokedex(pokeCreationDto.name);
        await newPokedex.fillPokemonMap();
        await this.pokeRepo.savePokedex(newPokedex);
        return toPokedexApi(newPokedex);
    }

    @Delete()
    async clearPokedexes(): Promise<void>{
        return this.pokeRepo.clearPokedexes();
    }

    @Get(':id')
    async findById(@Param('id') id:string): Promise<PokedexApi>{
        const found = await this.pokeRepo.findById(id);
        return toPokedexApi(found);
    }

    @Delete(':id')
    async removePokedex(@Param('id') id:string): Promise<void>{
        return this.pokeRepo.removePokedex(id);
    }

}