import { log } from 'console';

import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { CreateMockingDto } from './dto/create-mocking.dto';
import { IdMockingDto } from './dto/id-mocking.dto';
import { UpdateMockingDto } from './dto/update-mocking.dto';
import { MockingService } from './mocking.service';

@Controller('mocking')
export class MockingController {
  constructor(private readonly mockingService: MockingService) {}

  @Post()
  create(@Body() createMockingDto: CreateMockingDto) {
    return this.mockingService.create(createMockingDto);
  }

  @Get()
  findAll() {
    return this.mockingService.findAll();
  }

  @Get(':idMocking')
  findOne(@Param() idMockingDto: IdMockingDto) {
    return this.mockingService.findOne(idMockingDto);
  }

  @Patch(':idMocking')
  update(
    @Param() idMockingDto: IdMockingDto,
    @Body() updateMockingDto: UpdateMockingDto,
  ) {
    return this.mockingService.update(idMockingDto, updateMockingDto);
  }

  @Delete(':idMocking')
  remove(@Param() idMockingDto: IdMockingDto) {
    return this.mockingService.remove(idMockingDto);
  }
}
