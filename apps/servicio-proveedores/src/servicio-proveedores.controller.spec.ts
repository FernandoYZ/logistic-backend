import { Test, TestingModule } from '@nestjs/testing';
import { ServicioProveedoresController } from './servicio-proveedores.controller';
import { ServicioProveedoresService } from './servicio-proveedores.service';

describe('ServicioProveedoresController', () => {
  let servicioProveedoresController: ServicioProveedoresController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ServicioProveedoresController],
      providers: [ServicioProveedoresService],
    }).compile();

    servicioProveedoresController = app.get<ServicioProveedoresController>(ServicioProveedoresController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(servicioProveedoresController.getHello()).toBe('Hello World!');
    });
  });
});
