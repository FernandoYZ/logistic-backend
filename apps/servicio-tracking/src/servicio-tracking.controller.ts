import { Controller, Get } from '@nestjs/common';
import { ServicioTrackingService } from './servicio-tracking.service';

@Controller()
export class ServicioTrackingController {
  constructor(private readonly servicioTrackingService: ServicioTrackingService) {}

  @Get()
  getHello(): string {
    return this.servicioTrackingService.getHello();
  }
}
