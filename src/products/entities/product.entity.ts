import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { Color } from '../dto/create-product.dto';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true, nullable: true })
  name: string;
  @Column()
  price: number;
  @Column({ type: 'enum', enum: Color, array: true })
  color: Color[];
  @Column({ type: 'text', array: true })
  images: string[];
}
