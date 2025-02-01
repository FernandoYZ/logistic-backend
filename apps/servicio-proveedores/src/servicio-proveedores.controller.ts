import { Controller, Get } from '@nestjs/common';
import { ServicioProveedoresService } from './servicio-proveedores.service';

@Controller()
export class ServicioProveedoresController {
  constructor(private readonly servicioProveedoresService: ServicioProveedoresService) {}

  @Get()
  getHello(): string {
    return this.servicioProveedoresService.getHello();
  }
}
