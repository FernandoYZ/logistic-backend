import { Test, TestingModule } from '@nestjs/testing';
import { ServicioTrackingController } from './servicio-tracking.controller';
import { ServicioTrackingService } from './servicio-tracking.service';

describe('ServicioTrackingController', () => {
  let servicioTrackingController: ServicioTrackingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ServicioTrackingController],
      providers: [ServicioTrackingService],
    }).compile();

    servicioTrackingController = app.get<ServicioTrackingController>(ServicioTrackingController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(servicioTrackingController.getHello()).toBe('Hello World!');
    });
  });
});
