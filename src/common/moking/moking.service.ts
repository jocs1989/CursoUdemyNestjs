import { CreateProductDto } from 'src/products/dto/create-product.dto';
import { IdDto } from 'src/products/dto/id-product.dto';
import { PaginationQueryDto } from 'src/products/dto/paginationQuery.dto';
import { UpdateProductDto } from 'src/products/dto/update-product.dto';
import { v4 as uuidv4 } from 'uuid';

//https://www.npmjs.com/package/uuid
import { faker } from '@faker-js/faker/locale/es_MX';
//https://github.com/faker-js/faker
import { Injectable, NotFoundException } from '@nestjs/common';

import { CategoryInterface } from '../interface/categorys.interface';
import { ImagesInterface } from '../interface/images.interface';
import { ProductInterface } from '../interface/products.interface';

@Injectable()
export class MokingService {
  private static intance: MokingService;
  private products: ProductInterface[];
  private images: ImagesInterface[];
  private category: CategoryInterface[];
  newImages: ImagesInterface = {
    id: uuidv4(),
    name: '',
    url: '',
  };
  newCategory: CategoryInterface = {
    id: uuidv4(),
    name: '',
  };
  constructor() {
    if (!MokingService.intance) {
      MokingService.intance = this;
      this.products = [];
      this.images = [];
      this.category = [];
    }
    return MokingService.intance;
  }
  onApplicationBootstrap() {
    this.generateProducts();
  }
  private generateProducts(): void {
    for (let i = 0; i < 10; i++) {
      this.newImages.name = faker.commerce.productName();
      this.newImages.url = faker.image.url();
      this.newCategory.name = faker.commerce.department();
      const product: ProductInterface = {
        id: uuidv4(),
        name: faker.commerce.productName(),
        description: faker.lorem.sentence(),
        price: parseFloat(faker.commerce.price()),
        stock: parseFloat(faker.commerce.price({ min: 1, max: 1000 })),
        brand: faker.commerce.department(),
        images: [this.newImages],
        category: [this.newCategory],
        available: true,
        review: faker.lorem.sentence(),
      };
      this.products.push(product);
      this.images.push(this.newImages);
      this.category.push(this.newCategory);
    }
  }
  create(createProductDto: CreateProductDto) {}
  findAll(paginationQueryDto: PaginationQueryDto) {
    return this.products;
  }
  findOne(idDto: IdDto) {
    const { id } = idDto;
    const product =
      this.products.filter((item) => item.id === id).length === 0
        ? null
        : this.products.filter((item) => item.id == id)[0];
    if (!product) {
      throw new NotFoundException('Product not Exist');
    }
    return product;
  }
  update(idDto: IdDto, updateProductDto: UpdateProductDto) {}
  remove(idDto: IdDto) {}
}
