import { v4 as uuidv4 } from 'uuid';

//https://www.npmjs.com/package/uuid
import { faker } from '@faker-js/faker/locale/es_MX';
import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateMockingDto } from './dto/create-mocking.dto';
import { IdMockingDto } from './dto/id-mocking.dto';
import { UpdateMockingDto } from './dto/update-mocking.dto';
import { CategoryInterface } from './interface/category.interface.interface';
import { ImagesInterface } from './interface/images.interface.interface';
import { ProductsInterface } from './interface/products.interface.interface';

//https://github.com/faker-js/faker

@Injectable()
export class MockingService {
  // Simulación de base de datos en memoria
  private products: ProductsInterface[]; // Array para almacenar productos
  private images: ImagesInterface[]; // Array para almacenar imágenes
  private category: CategoryInterface[]; // Array para almacenar categorías
  // Crear una nueva instancia de imágenes con un UUID generado automáticamente
  newImages: ImagesInterface = {
    idImages: uuidv4(),
    name: '',
    url: '',
  };

  // Crear una nueva instancia de categoría con un UUID generado automáticamente
  newCategory: CategoryInterface = {
    idCategory: uuidv4(),
    name: '',
  };
  // Este método se ejecuta al iniciar la aplicación para crear productos en memoria.
  onApplicationBootstrap() {
    this.generateProducts();
  }

  // Patrón de diseño Singleton: instancia única de la clase
  private static instance: MockingService;
  constructor() {
    if (!MockingService.instance) {
      MockingService.instance = this;
      //Inicial la base virtuales
      this.products = []; //productos
      this.images = []; // images
      this.category = []; // categorias
    }
    return MockingService.instance;
  }
  //CRUD
  // Este método privado genera los productos de manera simulada.
  private generateProducts(): void {
    // Se establece el número de productos a generar.
    const n = 15;
    // Se itera para crear cada producto.
    for (let i = 0; i < n; i++) {
      // Se asignan valores aleatorios a las propiedades de cada producto utilizando la librería faker.
      this.newImages.name = faker.commerce.productName(); // crea un nombre de producto aleatorio
      this.newImages.url = faker.image.url(); // crea una url aleatoria
      this.newCategory.name = faker.commerce.department(); // crea una categoria
      // Se crea un objeto de tipo ProductInterface con datos simulados.
      const product: ProductsInterface = {
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
      // Se agrega el producto creado a la lista de productos.
      this.products.push(product);
      // Se añaden las imágenes y categorías generadas a las respectivas listas.
      this.images.push(this.newImages);
      this.category.push(this.newCategory);
    }
  }
  create(createMockingDto: CreateMockingDto) {
    const { images, category, ...otro } = createMockingDto;

    const allImages: ImagesInterface[] = images.map((item) => {
      return {
        idImages: uuidv4(),
        ...item,
      };
    });
    const allCategories: CategoryInterface[] = category.map((item) => {
      return {
        idCategory: uuidv4(),
        ...item,
      };
    });

    const modifiedProduct = {
      id: uuidv4(),
      ...otro,
      images: allImages,
      category: allCategories,
    };
    this.products.push(modifiedProduct);
    // Se añaden las imágenes y categorías generadas a las respectivas listas.
    //this.images.push(...allImages);
    //this.category.push(this.newCategory);
    return modifiedProduct;
    return 'This action adds a new mocking';
  }

  findAll() {
    return this.products;
  }

  findOne(idMockingDto: IdMockingDto) {
    const { idMocking } = idMockingDto;
    const product =
      this.products.filter((item) => item.id === idMocking).length === 0
        ? null
        : this.products.filter((item) => item.id == idMocking)[0];
    if (!product) {
      throw new NotFoundException('Product not Exist');
    }
    return product;
  }

  update(idMockingDto: IdMockingDto, updateMockingDto: UpdateMockingDto) {
    const result = this.updateProduct(idMockingDto, updateMockingDto);
    if (!result) {
      throw new NotFoundException('Product not Exist');
    }
    return result;
  }

  remove(idMockingDto: IdMockingDto) {
    const { idMocking } = idMockingDto;
    const index = this.products.findIndex((item) => item.id === idMocking);
    if (index === -1) {
      throw new NotFoundException('Product not Exist');
    }
    const productClear = this.products.filter(
      (item) => item.id === idMocking,
    )[0];
    this.products.splice(index, 1);
    return productClear;
  }

  private updateProduct(
    idMockingDto: IdMockingDto,
    updateMockingDto: UpdateMockingDto,
  ) {
    const { idMocking } = idMockingDto;

    const { images, category, ...otros } = updateMockingDto;
    const allImages: ImagesInterface[] = images?.map((item) => {
      return {
        idImages: uuidv4(),
        ...item,
      };
    });
    const allCategories: CategoryInterface[] = category?.map((item) => {
      return {
        idCategory: uuidv4(),
        ...item,
      };
    });

    this.products = this.products.map((item) => {
      if (item.id === idMocking) {
        return {
          ...item,
          ...otros,
          images: !allImages ? item.images : allImages,
          category: !allCategories ? item.category : allCategories,
        };
      } else {
        return item;
      }
    });

    const product = this.products.filter((item) => item.id === idMocking);
    const result = product.length === 0 ? null : product[0];
    return result;
  }
}
