import { Module } from '@nestjs/common';
import { FormationsController } from './formations.controller';
import { FormationsService } from './formations.service';
import { SharedModule } from '@app/shared';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { FormationSchema } from './formation.schema';


@Module({
  imports: [ ConfigModule.forRoot({
    isGlobal: true,
    //add this in local env : envFilePath: './.env',
  }),
  MongooseModule.forRoot('mongodb+srv://eya:eya@skillhub-course-cluster.4c0vnb8.mongodb.net/?retryWrites=true&w=majority') ,
  MongooseModule.forFeature([{name: 'Formation', schema: FormationSchema}]),
  SharedModule,
  SharedModule.registerRmq('AUTH_SERVICE', Buffer.from(process.env.RABBITMQ_AUTH_QUEUE, 'base64').toString('utf-8')),
],
  controllers: [FormationsController],
  providers: [FormationsService],
})
export class FormationsModule {}
