import { Module } from '@nestjs/common';

import { MokingService } from './moking/moking.service';

@Module({
  providers: [MokingService],
  exports: [MokingService],
})
export class CommonModule {}
