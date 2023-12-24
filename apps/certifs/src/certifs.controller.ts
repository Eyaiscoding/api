import { Ctx, MessagePattern, RmqContext } from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { CertifsService } from './certifs.service';
import { AuthGuard,SharedService } from '@app/shared';


@Controller()
export class CertifsController {
  constructor(
    private readonly certifsService: CertifsService,
    private readonly sharedService: SharedService,
    //TEMPORARY LINE BELOW
    private readonly authGuard : AuthGuard,
    ) { }

  @MessagePattern({ cmd: 'get-certifs' })
  async getCertif(@Ctx() context: RmqContext) {
    this.sharedService.acknowledgeMessage(context)
    
    //TEMPORARY LINE BELOW
    console.log(123, this.authGuard.hasJwt());
    return this.certifsService.getHello();


  }


  @MessagePattern({ cmd: 'get-certif' })
  async getCertifs(@Ctx() context: RmqContext) {
    this.sharedService.acknowledgeMessage(context)
    return this.certifsService.getHello();

  }


  @MessagePattern({ cmd: 'post-certif' })
  async postCertif(@Ctx() context: RmqContext) {
    this.sharedService.acknowledgeMessage(context)
    return this.certifsService.getHello();

  }
}
