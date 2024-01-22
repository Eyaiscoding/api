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
    //add this in local env : envFilePath: './.env',
  }),
  MongooseModule.forRoot('mongodb+srv://Molka:Molka@skillhub-certifs.j61onm8.mongodb.net/?retryWrites=true&w=majority') ,
  MongooseModule.forFeature([{name: 'Certif', schema: CertifSchema}]),
  SharedModule,
  SharedModule.registerRmq('AUTH_SERVICE', Buffer.from(process.env.RABBITMQ_AUTH_QUEUE, 'base64').toString('utf-8')),
],
  controllers: [CertifsController],
  providers: [CertifsService],
})
export class CertifsModule {}
