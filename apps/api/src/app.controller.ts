import { AuthGuard } from '@app/shared';
import { Body, Controller, Delete, Get, Inject, Param, Patch, Post, UseGuards } from '@nestjs/common';
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
  @Get('/certif/get-certifs')
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
  @Get('/certif/get-certif/:id')
  async getCertif(@Param('id') id: string) {
    return this.certifsService.send(
      {
        cmd: 'get-certif',
      },
      id,
    );
  }

  @Post('certif/create-certif')
  async createCertif(

    @Body('name') name: string,
    @Body('date') date: string,
    @Body('place') place: string,
    @Body('duration') duration: string,
    @Body('target') target: string,
    @Body('languages') languages: string,
    @Body('description') description: string,
  )
   {
    return this.certifsService.send(
      {
        cmd: 'create-certif',
      },
      {
          name,
          date,
          place,
          duration,
          target,
          languages,
          description,
      },
    );
  } 

  //@UseGuards(AuthGuard)
  @Patch('certif/update-certif/:id') // Patch == Put
  async updateCertif(
    @Param('id') id: string,
    @Body('name') name: string,
    @Body('date') date: string,
    @Body('place') place: string,
    @Body('duration') duration: string,
    @Body('target') target: string,
    @Body('languages') languages: string,
    @Body('description') description: string,
  ) {
    return this.certifsService.send(
      {
        cmd: 'update-certif', // Remove :id from the cmd
      },
      {
        id, // Pass id separately
        certif: {
          name,
          date,
          place,
          duration,
          target,
          languages,
          description,
        },
      }
    );
  }
  @UseGuards(AuthGuard)
  @Delete('certif/delete-certif/:id')
  async deleteCertif(@Param('id') id: string){
     
    return this.certifsService.send(
      {
        cmd: 'delete-certif', 
      },
      id,
    )
  }

  //protected route
  @UseGuards(AuthGuard)
  @Patch('formation/update-formation/:id') // Patch == Put
  async updateFormation(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('level') level: string,
    @Body('description') description: string,
    @Body('topics') topics: string,
    @Body('duration') duration: string,
    @Body('languages') languages: string,
    @Body('target') target: string,
  ) {
    return this.formationsService.send(
      {
        cmd: 'update-formation', // Remove :id from the cmd
      },
      {
        id, // Pass id separately
        formation: {
          title,
          level,
          description,
          topics,
          duration,
          languages,
          target,
        },
      }
    );
  }


  @UseGuards(AuthGuard)
  @Get('formation/get-formation/:id')
  async getFormation(@Param('id') id: string) {
    return this.formationsService.send(
      {
        cmd: 'get-formation', // Remove :id from the cmd
      },
      id, // Pass id as the payload
    );
  }

  @UseGuards(AuthGuard)
  @Get('formation/get-formations')
  async getFormations() {
    return this.formationsService.send(
      {
        cmd: 'get-formations',
      },
      {},
    );
  }

  @Post('formation/create-formation')
  async createFormation(
 
      @Body('title') title: string,
      @Body('level') level: string,
      @Body('description') description: string,
      @Body('topics') topics: string,
      @Body('duration') duration: string,
      @Body('languages') languages: string,
      @Body('target') target: string,
     
    ) 
    
    {
      return this.formationsService.send(
        {
          cmd: 'create-formation',
        },
        {
          title,
          level,
          description,
          topics,
          duration,
          languages,
          target,
        },
      );
    }

    @UseGuards(AuthGuard)
    @Delete('formation/delete-formation/:id')
    async deleteFormation(@Param('id') id: string) {
      return this.formationsService.send(
        {
          cmd: 'delete-formation', // Remove :id from the cmd
        },
        id, // Pass id as the payload
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
