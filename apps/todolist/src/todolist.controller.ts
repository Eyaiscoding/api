import { Controller, UseGuards } from '@nestjs/common';
import { TodolistService } from './todolist.service';
import { SharedService } from '@app/shared';
import { Ctx, MessagePattern, RmqContext } from '@nestjs/microservices';
import { AuthGuard } from '@app/shared';

@Controller('private')
export class TodolistController {
  
  constructor(
    private readonly todolistService: TodolistService,
    private readonly sharedService: SharedService
  ) { }

  @UseGuards(AuthGuard)
  @MessagePattern({ cmd: 'get-todolist' })
  async getTodoList(@Ctx() context: RmqContext) {
    this.sharedService.acknowledgeMessage(context)
    return this.todolistService.getHello();

  }

  @UseGuards(AuthGuard)
  @MessagePattern({ cmd: 'get-todolists' })
  async getTodoLists(@Ctx() context: RmqContext) {
    this.sharedService.acknowledgeMessage(context)
    return this.todolistService.getHello();

  }

  @UseGuards(AuthGuard)
  @MessagePattern({ cmd: 'post-todolist' })
  async postTodoList(@Ctx() context: RmqContext) {
    this.sharedService.acknowledgeMessage(context)
    return this.todolistService.getHello();

  }
}

