import { Injectable } from '@nestjs/common';

@Injectable()
export class ServicioProveedoresService {
  getHello(): string {
    return 'Hello World!';
  }
}
