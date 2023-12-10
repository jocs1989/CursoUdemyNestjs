import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';

import { ProductsService } from './products/products.service';
import { PokemonsService } from './pokemons/pokemons.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService, PokemonsService],
})
export class AppModule {}
