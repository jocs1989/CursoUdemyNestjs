import { IsNumberString, IsOptional } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsNumberString({ no_symbols: true })
  limit?: number;

  @IsOptional()
  @IsNumberString({ no_symbols: true })
  offset?: number;
}
