import { Injectable } from '@nestjs/common';

@Injectable()
export class CertifsService {
  getHello(): string {
    return 'Hello World!';
  }
}
