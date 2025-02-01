import { Controller, Get } from '@nestjs/common';
import { ServicioPedidosService } from './servicio-pedidos.service';

@Controller()
export class ServicioPedidosController {
  constructor(private readonly servicioPedidosService: ServicioPedidosService) {}

  @Get()
  getHello(): string {
    return this.servicioPedidosService.getHello();
  }
}
