import { Module } from '@nestjs/common';
import { CertifsController } from './certifs.controller';
import { CertifsService } from './certifs.service';
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from '@app/shared';

@Module({
  imports: [ ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: './.env',
  }),
   
  SharedModule,
],
  controllers: [CertifsController],
  providers: [CertifsService],
})
export class CertifsModule {}
