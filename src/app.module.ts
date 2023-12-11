import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { PokemonService } from './products/pokemon/pokemon.service';
import { HttpModule } from '@nestjs/axios';
import { ProductosModule } from './productos/productos.module';

@Module({
  imports: [HttpModule, ProductosModule],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService, PokemonService],
})
export class AppModule {}
