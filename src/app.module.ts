import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PokemonController} from "./Pokedex/Pokemon/pokemon.controller";
import {PokedexController} from "./Pokedex/pokedex.controller";
import {PokedexService} from "./Pokedex/pokedex.service";

@Module({
  imports: [],
  controllers: [AppController, PokemonController, PokedexController],
  providers: [AppService, PokedexService],
})
export class AppModule {}
