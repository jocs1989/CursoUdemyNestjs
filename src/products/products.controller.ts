import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto/create-product.dto';
import { UpdateProductDto } from './dto/create-product.dto/update-product.dto';

@Controller('products')
export class ProductsController {
  @Get()
  findAll(
    @Query('limit', new DefaultValuePipe(10)) limit: number,
    @Query('offset', new DefaultValuePipe(1)) offset: number,
  ) {
    console.log('limit', typeof limit);
    console.log('offset', offset);
    return `This action return all products Limit:${limit} and offset:${offset} `;
  }

  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return {
      id,
      name: 'teddy',
      price: 50,
    };
  }

  @Get(':stock')
  findOneStock(@Param('id') id: number) {
    return id;
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return createProductDto;
  }

  @Patch(':id')
  update(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    const old = {
      id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
      name: 'duky',
      price: 25,
      color: ['red', 'green'],
    };
    return { ...old, ...updateProductDto };
  }

  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return { id, name: 'teddy', price: '35' };
  }
}
