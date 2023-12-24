import { Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('AUTH_SERVICE') private authService: ClientProxy,
    @Inject('CERTIFS_SERVICE') private certifsService: ClientProxy,
    @Inject('FORMATIONS_SERVICE') private formationsService: ClientProxy,
    @Inject('TODOLIST_SERVICE') private todolistService: ClientProxy,
  ) { }

  @Get('auth')
  async getUsers() {
    return this.authService.send(
      {
        cmd: 'get-users',
      },
      {

      },
    );
  }

  @Post('auth')
  async postUser() {
    return this.authService.send(
      {
        cmd: 'post-user',
      },
      {

      },
    );
  }

  @Get('certifs')
  async getCertifs() {
    return this.certifsService.send(
      {
        cmd: 'get-certifs',
      },
      {

      },
    );
  }

  @Get('certif')
  async getCertif() {
    return this.certifsService.send(
      {
        cmd: 'get-certif',
      },
      {

      },
    );
  }


  @Post('certif')
  async postCertif() {
    return this.certifsService.send(
      {
        cmd: 'post-certif',
      },
      {

      },
    );
  }

  @Get('formations')
  async getFormations() {
    return this.formationsService.send(
      {
        cmd: 'get-formations',
      },
      {

      },
    );
  }

  @Get('formation')
  async getFormation() {
    return this.formationsService.send(
      {
        cmd: 'get-formation',
      },
      {

      },
    );
  }


  @Post('formation')
  async postFormation() {
    return this.formationsService.send(
      {
        cmd: 'post-formation',
      },
      {

      },
    );
  }

  @Get('todo-list')
  async getTodoList() {
    return this.todolistService.send(
      {
        cmd: 'get-todoList',
      },
      {

      },
    );
  }

  @Get('todo-list')
  async getTodoLists() {
    return this.todolistService.send(
      {
        cmd: 'get-todoLists',
      },
      {

      },
    );
  }


  @Post('todo-list')
  async postTodoList() {
    return this.todolistService.send(
      {
        cmd: 'post-todoList',
      },
      {

      },
    );
  }

}
