import { Module } from '@nestjs/common';
import { ServicioPedidosController } from './servicio-pedidos.controller';
import { ServicioPedidosService } from './servicio-pedidos.service';

@Module({
  imports: [],
  controllers: [ServicioPedidosController],
  providers: [ServicioPedidosService],
})
export class ServicioPedidosModule {}
