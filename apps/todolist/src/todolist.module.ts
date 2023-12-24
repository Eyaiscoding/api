import { Module } from '@nestjs/common';
import { TodolistController } from './todolist.controller';
import { TodolistService } from './todolist.service';
import { SharedModule } from '@app/shared';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: './.env',
  }),
   
  SharedModule,
],
  controllers: [TodolistController],
  providers: [TodolistService],
})
export class TodolistModule {}