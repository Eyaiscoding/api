import { Controller, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { SharedService } from '@app/shared';
import { NewUserDTO } from './dtos/new-user.dto';
import { ExistingUserDTO } from './dtos/existing-user.dto';
import { JwtGuard } from './jwt.guard';

@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly sharedService: SharedService,
  ) { }

  @MessagePattern({ cmd: 'get-users' })
  async getUsers(@Ctx() context: RmqContext) {
    this.sharedService.acknowledgeMessage(context)
    return this.authService.getUsers();

  }


  @MessagePattern({ cmd: 'register' })
  async register(@Ctx() context: RmqContext,
    @Payload() newUser: NewUserDTO
  ) {
    this.sharedService.acknowledgeMessage(context)
    return this.authService.register(newUser);

  }

  @MessagePattern({ cmd: 'login' })
  async login(@Ctx() context: RmqContext,
    @Payload() existingUser: ExistingUserDTO
  ) {
    this.sharedService.acknowledgeMessage(context)
    return this.authService.login(existingUser);

  }

  
  @MessagePattern({ cmd: 'verify-jwt' })
  @UseGuards(JwtGuard)
  async verifyJwt(@Ctx() context: RmqContext,
    @Payload() payload: { jwt: string },
  ) {
    this.sharedService.acknowledgeMessage(context)
    return this.authService.verifyJwt(payload.jwt);

  }

  
}
