import { Module } from '@nestjs/common';
import { ServicioTrackingController } from './servicio-tracking.controller';
import { ServicioTrackingService } from './servicio-tracking.service';

@Module({
  imports: [],
  controllers: [ServicioTrackingController],
  providers: [ServicioTrackingService],
})
export class ServicioTrackingModule {}
