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
      envFilePath: './.env',
    }),

    SharedModule.registerRmq('AUTH_SERVICE', process.env.RABBITMQ_AUTH_QUEUE),
    SharedModule.registerRmq('CERTIFS_SERVICE', process.env.RABBITMQ_CERTIFS_QUEUE),
    SharedModule.registerRmq('FORMATIONS_SERVICE', process.env.RABBITMQ_FORMATIONS_QUEUE),
    SharedModule.registerRmq('TODOLIST_SERVICE', process.env.RABBITMQ_TODOLIST_QUEUE),


  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
