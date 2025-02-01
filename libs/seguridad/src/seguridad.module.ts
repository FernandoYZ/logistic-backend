import { Module } from '@nestjs/common';
import { SeguridadService } from './seguridad.service';

@Module({
  providers: [SeguridadService],
  exports: [SeguridadService],
})
export class SeguridadModule {}
