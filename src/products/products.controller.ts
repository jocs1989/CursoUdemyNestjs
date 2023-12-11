import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto/create-product.dto';
import { UpdateProductDto } from './dto/create-product.dto/update-product.dto';
import { PaginationQueryDto } from '../common/dto/paginationQuery.dto';
import { ProductsService } from './products.service';
import { IdDto } from './dto/create-product.dto/id-products.dto';
import { PokemonService } from './pokemon/pokemon.service';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly pokemonService: PokemonService,
  ) {}

  @Get()
  findAll(@Query() paginationQueryDto: PaginationQueryDto) {
    return this.productsService.findAll(paginationQueryDto);
  }
  @Get('/pokemon')
  findAllPokemon(@Query() paginationQueryDto: PaginationQueryDto) {
    return this.pokemonService.findAll(paginationQueryDto);
  }

  @Get('/pokemon/:id')
  findOnePokemon(@Param('id', ParseIntPipe) id: number) {
    return this.pokemonService.findOne(id);
  }

  @Get(':id')
  findOne(@Param() idDto: IdDto) {
    return this.productsService.findOne(idDto);
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Patch(':id')
  update(@Param() idDto: IdDto, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(idDto, updateProductDto);
  }

  @Delete(':id')
  remove(@Param() idDto: IdDto) {
    return this.productsService.remove(idDto);
  }
}
