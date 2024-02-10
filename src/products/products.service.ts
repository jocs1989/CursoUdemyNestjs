import { Injectable } from '@nestjs/common';

import { CreateProductDto } from './dto/create-product.dto';
import { IdDto } from './dto/id-product.dto';
import { PaginationQueryDto } from './dto/paginationQuery.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  create(createProductDto: CreateProductDto) {
    console.log(createProductDto);
    return 'This action adds a new product';
  }

  findAll(paginationQueryDto: PaginationQueryDto) {
    console.log(paginationQueryDto);
    return `This action returns all products`;
  }

  findOne(idDto: IdDto) {
    return `This action returns a #${idDto.id} product`;
  }

  update(idDto: IdDto, updateProductDto: UpdateProductDto) {
    console.log(updateProductDto);
    return `This action updates a #${idDto.id} product`;
  }

  remove(idDto: IdDto) {
    return `This action removes a #${idDto.id} product`;
  }
}
