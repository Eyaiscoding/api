import { Injectable } from '@nestjs/common';

@Injectable()
export class FormationsService {
  getHello(): string {
    return 'Hello World!';
  }
}
