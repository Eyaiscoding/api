import { Module } from '@nestjs/common';
import { TodolistController } from './todolist.controller';
import { TodolistService } from './todolist.service';
// import { AuthGuard} from '@app/shared';
import { SharedModule } from '@app/shared';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    //add this in local env : envFilePath: './.env',
  }),

    SharedModule,
  SharedModule.registerRmq('AUTH_SERVICE', Buffer.from(process.env.RABBITMQ_AUTH_QUEUE, 'base64').toString('utf-8')),
  ],
  controllers: [TodolistController],
  providers: [TodolistService],
})
export class TodolistModule { }
//const decodedValue = Buffer.from(process.env.SOME_VAR, 'base64').toString('utf-8');