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
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { PaginationQueryDto } from 'src/common/dto/paginationQuery.dto';
import { IdDto } from 'src/common/dto/id-productos.dto';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  create(@Body() createProductoDto: CreateProductoDto) {
    return this.productosService.create(createProductoDto);
  }

  @Get()
  findAll(@Query() paginationQueryDto: PaginationQueryDto) {
    return this.productosService.findAll(paginationQueryDto);
  }

  @Get(':id')
  findOne(@Param() idDto: IdDto) {
    return this.productosService.findOne(idDto);
  }

  @Patch(':id')
  update(@Param() idDto: IdDto, @Body() updateProductoDto: UpdateProductoDto) {
    return this.productosService.update(idDto, updateProductoDto);
  }

  @Delete(':id')
  remove(@Param() idDto: IdDto) {
    return this.productosService.remove(idDto);
  }
}
