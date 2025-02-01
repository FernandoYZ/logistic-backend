import { Controller, Get } from '@nestjs/common';
import { ServicioInventarioService } from './servicio-inventario.service';

@Controller()
export class ServicioInventarioController {
  constructor(private readonly servicioInventarioService: ServicioInventarioService) {}

  @Get()
  getHello(): string {
    return this.servicioInventarioService.getHello();
  }
}
