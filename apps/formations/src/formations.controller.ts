import { Controller, Get, Param } from '@nestjs/common';
import { FormationsService } from './formations.service';
import { SharedService } from '@app/shared';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { FormationDocument } from './formation.schema';

@Controller('formation')
export class FormationsController {
  constructor(
    private formationsService: FormationsService,
    private readonly sharedService: SharedService
    ) {}

    @MessagePattern({ cmd: 'get-formations' })
    async getFormations(@Ctx() context: RmqContext) {
      this.sharedService.acknowledgeMessage(context)
      return this.formationsService.findAll();
  
    }
  
  
    @MessagePattern({ cmd: 'get-formation' }) // Removed /:id from the cmd
    async getFormation(@Ctx() context: RmqContext, @Payload() id: string) {
      this.sharedService.acknowledgeMessage(context);
      return this.formationsService.findOne(id);
    }
  
    
  
  
    @MessagePattern({ cmd: 'create-formation' })
    async createFormation(@Ctx() context: RmqContext,
    @Payload() formation: FormationDocument
  ):Promise<FormationDocument> {
    this.sharedService.acknowledgeMessage(context)
    return this.formationsService.create(    
      formation.title,
      formation.level,
      formation.description,
      formation.topics,
      formation.duration,
      formation.languages,
      formation.target,);

  }
  }

