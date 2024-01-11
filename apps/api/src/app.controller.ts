import { AuthGuard } from '@app/shared';
import { Body, Controller, Get, Inject, Post, UseGuards } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('AUTH_SERVICE') private authService: ClientProxy,
    @Inject('CERTIFS_SERVICE') private certifsService: ClientProxy,
    @Inject('FORMATIONS_SERVICE') private formationsService: ClientProxy,
    @Inject('TODOLIST_SERVICE') private todolistService: ClientProxy,
  ) {}

  @Get('auth')
  async getUsers() {
    return this.authService.send(
      {
        cmd: 'get-users',
      },
      {},
    );
  }

  @Post('auth')
  async postUser() {
    return this.authService.send(
      {
        cmd: 'post-user',
      },
      {},
    );
  }

  @UseGuards(AuthGuard)
  @Get('certifs')
  async getCertifs() {
    return this.certifsService.send(
      {
        cmd: 'get-certifs',
      },
      {},
    );
  }

  //protected route
  @UseGuards(AuthGuard)
  @Get('certif')
  async getCertif() {
    return this.certifsService.send(
      {
        cmd: 'get-certif',
      },
      {},
    );
  }

  @Post('certif')
  async postCertif() {
    return this.certifsService.send(
      {
        cmd: 'post-certif',
      },
      {},
    );
  }

  @UseGuards(AuthGuard)
  @Get('formations')
  async getFormations() {
    return this.formationsService.send(
      {
        cmd: 'get-formations',
      },
      {},
    );
  }

  @UseGuards(AuthGuard)
  @Get('formation')
  async getFormation() {
    return this.formationsService.send(
      {
        cmd: 'get-formation',
      },
      {},
    );
  }

  @Post('formation')
  async postFormation() {
    return this.formationsService.send(
      {
        cmd: 'post-formation',
      },
      {},
    );
  }

  @UseGuards(AuthGuard)
  @Get('todolist')
  async getTodoList() {
    return this.todolistService.send(
      {
        cmd: 'get-todolist',
      },
      {},
    );
  }

  @UseGuards(AuthGuard)
  @Get('todolists')
  async getTodoLists() {
    return this.todolistService.send(
      {
        cmd: 'get-todolists',
      },
      {},
    );
  }

  @Post('todolist')
  async postTodoList() {
    return this.todolistService.send(
      {
        cmd: 'post-todolist',
      },
      {},
    );
  }

  @Post('auth/register')
  async register(
    @Body('fullName') fullName: string,
    @Body('phoneNbr') phoneNbr: string,
    @Body('department') department: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    return this.authService.send(
      {
        cmd: 'register',
      },
      {
        fullName,
        phoneNbr,
        department,
        email,
        password,
      },
    );
  }

  @Post('auth/login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    return this.authService.send(
      {
        cmd: 'login',
      },
      {
        email,
        password,
      },
    );
  }
}
