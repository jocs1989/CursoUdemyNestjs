import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs';
import { PaginationQueryDto } from '../../common/dto/paginationQuery.dto';

import { Pokemon } from '../interface/pokemon.interface';
import { Pokemons } from '../interface/pokemons.interface';

@Injectable()
export class PokemonService {
  constructor(private readonly httpService: HttpService) {}

  findAll(paginationQueryDto: PaginationQueryDto) {
    const { limit, offset } = paginationQueryDto;
    return this.httpService
      .get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .pipe(map((response: AxiosResponse<Pokemons>) => response.data.results));
  }
  findOne(id: number) {
    console.log(id);
    return this.httpService
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .pipe(map((response: AxiosResponse<Pokemon>) => response.data.height));
  }
}
