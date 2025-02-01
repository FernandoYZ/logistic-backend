import { NestFactory } from '@nestjs/core';
import { ServicioPedidosModule } from './servicio-pedidos.module';

async function bootstrap() {
  const app = await NestFactory.create(ServicioPedidosModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
