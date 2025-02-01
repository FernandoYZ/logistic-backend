import { Module } from '@nestjs/common';
import { ServicioProveedoresController } from './servicio-proveedores.controller';
import { ServicioProveedoresService } from './servicio-proveedores.service';

@Module({
  imports: [],
  controllers: [ServicioProveedoresController],
  providers: [ServicioProveedoresService],
})
export class ServicioProveedoresModule {}
