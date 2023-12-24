import { Module } from '@nestjs/common';
import { FormationsController } from './formations.controller';
import { FormationsService } from './formations.service';
import { SharedModule } from '@app/shared';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: './.env',
  }),
   
  SharedModule,
],
  controllers: [FormationsController],
  providers: [FormationsService],
})
export class FormationsModule {}
