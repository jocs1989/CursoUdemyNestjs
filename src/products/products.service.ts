import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto/create-product.dto';
import { uuid } from 'uuidv4';
import { UpdateProductDto } from './dto/create-product.dto/update-product.dto';
import { PaginationQueryDto } from './dto/create-product.dto/paginationQuery.dto';
@Injectable()
export class ProductsService {
  private productos = [
    {
      id: '3f257894-cbf9-4b95-9cd8-f84c77f4f28a',
      name: 'Teddy',
      price: 50,
      color: ['red', 'blue'],
    },
    {
      id: '5d0cc0cf-3761-4e52-95a2-24dbb5b4d0d6',
      name: 'Cocina de Juguete',
      price: 29.99,
      color: ['green', 'blue'],
    },
    {
      id: 'ea7c7f53-c2cc-4e4a-80b7-55b8f1903f67',
      name: 'Rompecabezas',
      price: 12.49,
      color: ['red', 'green', 'blue'],
    },
    {
      id: 'f470bf9f-b388-43bf-8c4a-45e69abde2c3',
      name: 'Auto de Control Remoto',
      price: 24.99,
      color: ['red', 'green'],
    },
    {
      id: '146af399-d350-4ae6-8b80-01d10e3ba03b',
      name: 'Pelota de Fútbol',
      price: 9.99,
      color: ['blue'],
    },
    {
      id: 'af0e3fc4-7b62-4fcd-923e-38da6cc633d2',
      name: 'Juego de Construcción',
      price: 19.99,
      color: ['red', 'green', 'blue'],
    },
    {
      id: '5e915e6e-b03f-4961-b2a2-c2d666d19a64',
      name: 'Set de Pintura',
      price: 16.79,
      color: ['green', 'blue'],
    },
    {
      id: '05112268-b07b-4b41-bbda-07e4713e631a',
      name: 'Muñeca',
      price: 8.99,
      color: ['red', 'green', 'blue'],
    },
    {
      id: '925f437a-6ac6-4d0c-b1de-9e32f95d24e6',
      name: 'Tabla de Surf para Muñecos',
      price: 14.99,
      color: ['green', 'blue'],
    },
    {
      id: '1d5d59b0-3da5-4eb0-bb03-0a9ba78c3719',
      name: 'Juego de Mesa',
      price: 22.49,
      color: ['red', 'green'],
    },
    {
      id: '1d4a7e60-5cb2-45e7-a84f-9aa3506026c6',
      name: 'Ducky',
      price: 25,
      color: ['red', 'green', 'blue'],
    },
  ];

  constructor() {}
  findAll(paginationQueryDto: PaginationQueryDto) {
    // Otra forma 
    // const { limit = 10, offset = 1 } = paginationQueryDto;
    //const startIdx = offset - 1;
   // const endIdx = startIdx + limit;
    
    return this.productos.slice(startIdx, endIdx);
    const { limit = 10, offset = 0 } = paginationQueryDto;
    const n = this.productos.length;
    if (n >= offset && limit <= n) {
      return this.productos.filter((item, i) => {
        if (i <= limit - 1) {
          if (offset - 1 <= i) {
            return item;
          }
        }
      });
    } else if (!offset && limit <= n) {
      return this.productos.filter((item, i) => {
        if (i <= limit - 1) {
          return item;
        }
      });
    } else if (n >= offset && !limit) {
      return this.productos.filter((item, i) => {
        if (offset - 1 <= i) {
          return item;
        }
      });
    } else {
      return this.productos;
    }
  }
  findOne(id: string) {
    return this.productos.filter((item) => item.id === id);
  }
  create(createProductDto: CreateProductDto) {
    const newProduct = { id: uuid(), ...createProductDto };
    this.productos.push({ ...newProduct });

    return this.productos;
  }
  update(id: string, updateProductDto: UpdateProductDto) {
    return this.productos
      .map((item) => {
        if (item.id == id) {
          return { ...item, ...updateProductDto };
        } else {
          return item;
        }
      })
      .filter((item) => item.id === id);
  }
  remove(id: string) {
    const oldPruduct = this.productos.filter((item) => item.id === id);
    this.productos = this.productos.filter((item) => item.id !== id);
    return oldPruduct;
  }
}
