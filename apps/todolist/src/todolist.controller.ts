import { Controller} from '@nestjs/common';
import { TodolistService } from './todolist.service';
import { SharedService } from '@app/shared';
import { Ctx, MessagePattern, RmqContext } from '@nestjs/microservices';

@Controller()
export class TodolistController {
  constructor(
    private readonly todolistService: TodolistService,
    private readonly sharedService: SharedService
  ) { }

  @MessagePattern({ cmd: 'get-todoList' })
  async getTodoList(@Ctx() context: RmqContext) {
    this.sharedService.acknowledgeMessage(context)
    return this.todolistService.getHello();

  }


  @MessagePattern({ cmd: 'get-todoLists' })
  async getTodoLists(@Ctx() context: RmqContext) {
    this.sharedService.acknowledgeMessage(context)
    return this.todolistService.getHello();

  }


  @MessagePattern({ cmd: 'post-todoList' })
  async postTodoList(@Ctx() context: RmqContext) {
    this.sharedService.acknowledgeMessage(context)
    return this.todolistService.getHello();

  }
}

