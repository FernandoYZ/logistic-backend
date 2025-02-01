import { Test, TestingModule } from '@nestjs/testing';
import { ServicioPedidosController } from './servicio-pedidos.controller';
import { ServicioPedidosService } from './servicio-pedidos.service';

describe('ServicioPedidosController', () => {
  let servicioPedidosController: ServicioPedidosController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ServicioPedidosController],
      providers: [ServicioPedidosService],
    }).compile();

    servicioPedidosController = app.get<ServicioPedidosController>(ServicioPedidosController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(servicioPedidosController.getHello()).toBe('Hello World!');
    });
  });
});
