import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { PaginationQueryDto } from 'src/products/dto/create-product.dto/paginationQuery.dto';
import { map } from 'rxjs/operators';
import { Pokemon } from './interface/pokemon.interface';
@Injectable()
export class PokemonsService {
  constructor(private readonly httpService: HttpService) {}
  findAll(
    paginationQueryDto: PaginationQueryDto,
  ): Observable<AxiosResponse<any>> {
    const { limit = 10, offset = 1 } = paginationQueryDto;

    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    return this.httpService
      .get(url)
      .pipe(map((response: AxiosResponse) => response.data.results));
  }
  findOne(id: number) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return this.httpService
      .get(url)
      .pipe(map((response: AxiosResponse<Pokemon>) => response.data));
  }
}
