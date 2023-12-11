import {
  IsUUID,
  IsString,
  IsNumber,
  IsArray,
  IsEnum,
  ArrayMinSize,
} from 'class-validator';
import { Color } from 'src/products/dto/create-product.dto/create-product.dto';

export class CreateProductoDto {
  @IsUUID(4, { message: 'No es uuid valido' })
  readonly id: string;
  @IsString({ message: 'Nombre no valido' })
  readonly name: string;
  @IsNumber()
  readonly price: number;
  @IsArray()
  @IsEnum(Color, { each: true })
  @ArrayMinSize(1)
  readonly color: Color[];
}
