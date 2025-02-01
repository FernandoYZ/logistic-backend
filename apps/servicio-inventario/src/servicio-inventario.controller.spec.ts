import { Test, TestingModule } from '@nestjs/testing';
import { ServicioInventarioController } from './servicio-inventario.controller';
import { ServicioInventarioService } from './servicio-inventario.service';

describe('ServicioInventarioController', () => {
  let servicioInventarioController: ServicioInventarioController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ServicioInventarioController],
      providers: [ServicioInventarioService],
    }).compile();

    servicioInventarioController = app.get<ServicioInventarioController>(ServicioInventarioController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(servicioInventarioController.getHello()).toBe('Hello World!');
    });
  });
});
