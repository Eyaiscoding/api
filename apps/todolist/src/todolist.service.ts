import { Injectable } from '@nestjs/common';

@Injectable()
export class TodolistService {
  getHello(): string {
    return 'Hello World!';
  }
}
