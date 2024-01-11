import { Module } from '@nestjs/common';
import { CertifsController } from './certifs.controller';
import { CertifsService } from './certifs.service';
import { ConfigModule } from '@nestjs/config';
// import { AuthGuard} from '@app/shared';
import { SharedModule } from '@app/shared';

@Module({
  imports: [ ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: './.env',
  }),
   
  SharedModule,
  // SharedModule.registerRmq('AUTH_SERVICE', process.env.RABBITMQ_AUTH_QUEUE),
],
  controllers: [CertifsController],
  providers: [CertifsService],
})
export class CertifsModule {}
