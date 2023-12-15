import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id_product: string;

  @Column({ unique: true })
  name: string;

  @Column({ default: 1 })
  price: number;

  @Column({ default: 0 })
  stock: number;

  @Column('simple-array', { default: ['not category'] })
  id_category: string[];
}
