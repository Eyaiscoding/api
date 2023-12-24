import { NestFactory } from '@nestjs/core';
import { CertifsModule } from './certifs.module';
import { ConfigService } from '@nestjs/config';
import { SharedService } from '@app/shared';

async function bootstrap() {
  
  const app = await NestFactory.create(CertifsModule);

  const configService = app.get(ConfigService);
  const sharedService = app.get(SharedService);

  const queue = configService.get('RABBITMQ_CERTIFS_QUEUE');

  app.connectMicroservice(sharedService.getRmqOptions(queue));
  app.startAllMicroservices();

}
bootstrap();
