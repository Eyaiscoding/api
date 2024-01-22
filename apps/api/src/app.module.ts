import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from '@app/shared';

//dynamic module
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      //add this in local env : envFilePath: './.env',
    }),

    SharedModule.registerRmq('AUTH_SERVICE', Buffer.from(process.env.RABBITMQ_AUTH_QUEUE, 'base64').toString('utf-8')),
    SharedModule.registerRmq('CERTIFS_SERVICE', Buffer.from(process.env.RABBITMQ_CERTIFS_QUEUE, 'base64').toString('utf-8')),
    SharedModule.registerRmq('FORMATIONS_SERVICE', Buffer.from(process.env.RABBITMQ_FORMATIONS_QUEUE, 'base64').toString('utf-8')),
    SharedModule.registerRmq('TODOLIST_SERVICE', Buffer.from(process.env.RABBITMQ_TODOLIST_QUEUE, 'base64').toString('utf-8')),


  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
