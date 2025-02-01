import { Module } from '@nestjs/common';
import { ComunService } from './comun.service';

@Module({
  providers: [ComunService],
  exports: [ComunService],
})
export class ComunModule {}
