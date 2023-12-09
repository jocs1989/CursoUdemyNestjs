import {
  ArrayMinSize,
  IsArray,
  IsEnum,
  IsNumber,
  IsNumberString,
  IsPositive,
  IsString,
  IsUUID,
} from 'class-validator';

export enum Color {
  RED = 'red',
  GREEN = 'green',
  BLUE = 'blue',
}

export class CreateProductDto {
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
