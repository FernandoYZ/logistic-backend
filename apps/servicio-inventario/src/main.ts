import { NestFactory } from '@nestjs/core';
import { ServicioInventarioModule } from './servicio-inventario.module';

async function bootstrap() {
  const app = await NestFactory.create(ServicioInventarioModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
