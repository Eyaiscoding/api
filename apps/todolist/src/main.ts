import { NestFactory } from '@nestjs/core';
import { TodolistModule } from './todolist.module';
import { ConfigService } from '@nestjs/config';
import { SharedService } from '@app/shared';

async function bootstrap() {
 
  const app = await NestFactory.create(TodolistModule);

  const configService = app.get(ConfigService);
  const sharedService = app.get(SharedService);

  const queue = configService.get('RABBITMQ_TODOLIST_QUEUE');

  app.connectMicroservice(sharedService.getRmqOptions(queue));
  app.startAllMicroservices();

}
bootstrap();
