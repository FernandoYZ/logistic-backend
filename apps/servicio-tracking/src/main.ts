import { NestFactory } from '@nestjs/core';
import { ServicioTrackingModule } from './servicio-tracking.module';

async function bootstrap() {
  const app = await NestFactory.create(ServicioTrackingModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
