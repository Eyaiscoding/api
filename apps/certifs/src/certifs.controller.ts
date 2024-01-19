import { Ctx, MessagePattern, RmqContext, Payload } from '@nestjs/microservices';
import { Controller, Get, Param, Post } from '@nestjs/common';
import { CertifsService } from './certifs.service';
import { SharedService } from '@app/shared';
import { CertifDocument } from './certif.schema';


@Controller('certif')
export class CertifsController {
  constructor(
    private readonly certifsService: CertifsService,
    private readonly sharedService: SharedService,
  ) { }

  @MessagePattern({ cmd: 'get-certifs' })
  async getCertif(@Ctx() context: RmqContext) {
    this.sharedService.acknowledgeMessage(context)
    return this.certifsService.findAll();
  }


  @MessagePattern({ cmd: 'get-certif' })
  async getCertifs(@Ctx() context: RmqContext, @Payload() id: string) {
    this.sharedService.acknowledgeMessage(context)
    return this.certifsService.findOne(id);
  }


  @MessagePattern({ cmd: 'create-certif' })
  async createCertif(@Ctx() context: RmqContext, @Payload() certif: CertifDocument
  ):Promise<CertifDocument> {
    this.sharedService.acknowledgeMessage(context)
    return this.certifsService.create(
       certif.name,
       certif.date,
       certif.place,
       certif.duration,
       certif.target,
       certif.languages,
       certif.description,);

  }

  @MessagePattern({ cmd: 'update-certif' })
  async updateFormation(@Ctx() context: RmqContext, @Payload() payload: { id: string, certif: CertifDocument }) {
    this.sharedService.acknowledgeMessage(context);
  
    const { id, certif } = payload;
    return this.certifsService.update(
      id,
      certif.name,
      certif.date,
      certif.place,
      certif.duration,
      certif.target,
      certif.languages,
      certif.description,

    );
    }
}
