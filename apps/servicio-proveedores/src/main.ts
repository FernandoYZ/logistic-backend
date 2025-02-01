import { NestFactory } from '@nestjs/core';
import { ServicioProveedoresModule } from './servicio-proveedores.module';

async function bootstrap() {
  const app = await NestFactory.create(ServicioProveedoresModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
