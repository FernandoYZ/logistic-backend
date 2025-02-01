import { Injectable } from '@nestjs/common';

@Injectable()
export class ServicioTrackingService {
  getHello(): string {
    return 'Hello World!';
  }
}
