import { ArrayMinSize, IsArray, IsEnum, IsNumber, IsString, IsUrl } from 'class-validator';

export enum Color {
  RED = 'red',
  GREEN = 'green',
  BLUE = 'blue',
}

export class CreateProductDto {
  @IsString()
  readonly name: string;
  @IsNumber()
  readonly price: number;
  @IsArray()
  @IsEnum(Color, { each: true })
  @ArrayMinSize(1)
  readonly color: Color[];
  @IsArray()
  @ArrayMinSize(1)
  readonly images: string[];
}
