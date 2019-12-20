import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PokemonController} from "./Pokedex/Pokemon/pokemon.controller";
import {PokedexController} from "./Pokedex/pokedex.controller";
import {PokedexService} from "./Pokedex/pokedex.service";
import {InformationController} from "./Pokedex/information.controller";

@Module({
  imports: [],
  controllers: [AppController, PokemonController, PokedexController, InformationController],
  providers: [AppService, PokedexService],
})
export class AppModule {}
