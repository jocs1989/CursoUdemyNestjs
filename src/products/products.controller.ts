import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto/create-product.dto';
import { UpdateProductDto } from './dto/create-product.dto/update-product.dto';
import { ProductsService } from './products.service';
import { PaginationQueryDto } from './dto/create-product.dto/paginationQuery.dto';
import { PokemonsService } from 'src/pokemons/pokemons.service';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly pokemonsService: PokemonsService,
  ) {}
  @Get()
  findAllProduct(@Query() paginationQueryDto: PaginationQueryDto) {
    return this.productsService.findAll(paginationQueryDto);
  }
  @Get('pokemon')
  findAllPokemon(@Query() paginationQueryDto: PaginationQueryDto) {
    return this.pokemonsService.findAll(paginationQueryDto);
  }

  @Get('pokemon/:id')
  findOnePokemon(@Param('id', ParseIntPipe) id: number) {
    return this.pokemonsService.findOne(id);
  }

  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.productsService.findOne(`${id}`);
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Patch(':id')
  update(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.productsService.remove(id);
  }
}
