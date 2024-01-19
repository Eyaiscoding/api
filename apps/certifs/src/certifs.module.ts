import { Module } from '@nestjs/common';
import { CertifsController } from './certifs.controller';
import { CertifsService } from './certifs.service';
import { ConfigModule } from '@nestjs/config';
// import { AuthGuard} from '@app/shared';
import { SharedModule } from '@app/shared';
import { MongooseModule } from '@nestjs/mongoose';
import { CertifSchema } from './certif.schema';


@Module({
  imports: [ ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: './.env',
  }),
  MongooseModule.forFeature([{name: 'Certif', schema: CertifSchema}]),
  SharedModule,
  SharedModule.registerRmq('AUTH_SERVICE', process.env.RABBITMQ_AUTH_QUEUE),
],
  controllers: [CertifsController],
  providers: [CertifsService],
})
export class CertifsModule {}
