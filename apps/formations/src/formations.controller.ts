import { Controller, Get } from '@nestjs/common';
import { FormationsService } from './formations.service';
import { SharedService } from '@app/shared';
import { Ctx, MessagePattern, RmqContext } from '@nestjs/microservices';

@Controller()
export class FormationsController {
  constructor(
    private readonly formationsService: FormationsService,
    private readonly sharedService: SharedService
    ) {}

    @MessagePattern({ cmd: 'get-formations' })
    async getFormations(@Ctx() context: RmqContext) {
      this.sharedService.acknowledgeMessage(context)
      return this.formationsService.getHello();
  
    }
  
  
    @MessagePattern({ cmd: 'get-formation' })
    async getFormation(@Ctx() context: RmqContext) {
      this.sharedService.acknowledgeMessage(context)
      return this.formationsService.getHello();
  
    }
  
  
    @MessagePattern({ cmd: 'post-formation' })
    async postFormation(@Ctx() context: RmqContext) {
      this.sharedService.acknowledgeMessage(context)
      return this.formationsService.getHello();
  
    }
  }

