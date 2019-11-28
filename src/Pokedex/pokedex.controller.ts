import {Body, Controller, Get, Param, Post} from "@nestjs/common";
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
    savePokedex(@Body() pokeCreationDto: PokedexCreationDTO): Promise<void>{
        const newPokedex = new Pokedex(pokeCreationDto.name);
        return this.pokeRepo.savePokedex(newPokedex);
    }

    @Get(':id')
    findById(@Param('id') id:string): Promise<Pokedex>{
        return this.pokeRepo.findById(id);
    }

    @Post(':id')
    removePokedex(@Param('id') id:string): Promise<void>{
        return this.pokeRepo.removePokedex(id);
    }
}