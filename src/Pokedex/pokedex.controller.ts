import {Body, Controller, Delete, Get, Param, Post} from "@nestjs/common";
import {PokedexService} from "./pokedex.service";
import {Pokedex} from "./Pokedex";
import {PokedexCreationDTO} from "./PokedexDTO";

@Controller('pokedexes')
export class PokedexController{
    constructor(private readonly pokeRepo: PokedexService){}

    @Get()
    getAll(): Promise<Pokedex[]> {
        return this.pokeRepo.getAllPokedex();
    }

    @Post()
    async savePokedex(@Body() pokeCreationDto: PokedexCreationDTO): Promise<void>{
        let newPokedex = await new Pokedex(pokeCreationDto.name);
        await newPokedex.fillPokemonMap();
        return this.pokeRepo.savePokedex(newPokedex);
    }

    @Delete()
    async clearPokedexes(): Promise<void>{
        return this.pokeRepo.clearPokedexes();
    }

    @Get(':id')
    async findById(@Param('id') id:string): Promise<Pokedex>{
        return this.pokeRepo.findById(id);
    }

    @Delete(':id')
    async removePokedex(@Param('id') id:string): Promise<void>{
        return this.pokeRepo.removePokedex(id);
    }

}