import { Injectable } from '@nestjs/common';

@Injectable()
export class ServicioPedidosService {
  getHello(): string {
    return 'Hello World!';
  }
}
