import { Injectable } from '@nestjs/common';

@Injectable()
export class ServicioInventarioService {
  getHello(): string {
    return 'Hello World!';
  }
}
