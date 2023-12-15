import { Transform } from 'class-transformer';
import {
    ArrayMinSize, IsArray, IsEnum, IsIn, IsInt, IsNotEmpty, IsNumber, IsString, IsUUID
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  @Transform((item) => item.value.trim())
  readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @IsNotEmpty()
  @IsNumber()
  stock: number;

  @IsArray()
  @ArrayMinSize(1)
  readonly id_category: string[];
}
