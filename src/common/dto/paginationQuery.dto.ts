import { IsNumberString, IsOptional } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsNumberString({ no_symbols: true })
  readonly limit?: number;

  @IsOptional()
  @IsNumberString({ no_symbols: true })
  readonly offset?: number;
}
