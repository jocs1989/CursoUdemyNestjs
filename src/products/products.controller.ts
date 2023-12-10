import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PaginationQueryDto } from './dto/paginationQuery.dto';
import { IdDto } from './dto/id-product.dto';
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll(@Query() paginationQueryDto: PaginationQueryDto) {
    return this.productsService.findAll(paginationQueryDto);
  }

  @Get(':id')
  findOne(@Param() idDto: IdDto) {
    return this.productsService.findOne(idDto);
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
