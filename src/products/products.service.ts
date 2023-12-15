import { Repository } from 'typeorm';

import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateProductDto } from './dto/create-product.dto';
import { IdDto } from './dto/id-product.dto';
import { PaginationQueryDto } from './dto/paginationQuery.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ) {}
  async create(createProductDto: CreateProductDto): Promise<Product> {
    try {
      const newProduct = this.productsRepository.create(createProductDto);
      return await this.productsRepository.save(newProduct);
    } catch (err) {
      const pgUniqueVilationErroCode = '23505';
      if (err.code === pgUniqueVilationErroCode) {
        throw new ConflictException('product name not exist');
      }
    }
  }

  findAll(paginationQueryDto: PaginationQueryDto) {
    const { limit = 10, offset = 0 } = paginationQueryDto;
    return this.productsRepository.find({
      take: limit,
      skip: offset,
    });
  }

  async findOne(idDto: IdDto): Promise<Product> {
    const product = await this.productsRepository.findOneBy({
      id_product: idDto.id,
    });
    if (!product) {
      throw new NotFoundException(`Product ${idDto.id} not valid`);
    }
    return product;
  }

  async update(
    idDto: IdDto,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const oldProduct = await this.productsRepository.preload({
      id_product: idDto.id,
      ...updateProductDto,
    });
    if (!oldProduct) {
      throw new NotFoundException(`Product ${idDto.id} not valid`);
    }

    return oldProduct;
  }

  remove(idDto: IdDto) {
    return `This action removes a #${idDto.id} product`;
  }
}
