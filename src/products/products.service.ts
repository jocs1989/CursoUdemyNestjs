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
    private productsRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    try {
      const newProduct = this.productsRepository.create(createProductDto);
      return await this.productsRepository.save(newProduct);
    } catch (err) {
      const pgUniqueVilationErrorCode = '23505';
      if (pgUniqueVilationErrorCode === err.code) {
        throw new ConflictException('This product Exist');
      }
    }
  }

  async findAll(paginationQueryDto: PaginationQueryDto): Promise<Product[]> {
    const { limit = 2, offset = 0 } = paginationQueryDto;
    console.log('limit:', limit, 'offset', offset);
    return await this.productsRepository.find({
      take: limit,
      skip: offset,
    });
  }

  async findOne(idDto: IdDto): Promise<Product> {
    const { id } = idDto;
    const product = await this.productsRepository.findOne({
      where: { id },
    });
    if (!product) {
      throw new NotFoundException('Product not Exist');
    }
    return product;
  }

  async update(
    idDto: IdDto,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const { id } = idDto;
    const product = await this.productsRepository.preload({
      id,
      ...updateProductDto,
    });
    if (!product) {
      throw new NotFoundException('Product not Exist');
    }
    return this.productsRepository.save(product);
  }

  async remove(idDto: IdDto) {
    const { id } = idDto;
    const product = await this.productsRepository.findOne({
      where: { id },
    });
    if (!product) {
      throw new NotFoundException('Product not Exist');
    }
    this.productsRepository.remove(product);
    return product;
  }
}
