import { Module } from '@nestjs/common';
import { ServicioInventarioController } from './servicio-inventario.controller';
import { ServicioInventarioService } from './servicio-inventario.service';

@Module({
  imports: [],
  controllers: [ServicioInventarioController],
  providers: [ServicioInventarioService],
})
export class ServicioInventarioModule {}
