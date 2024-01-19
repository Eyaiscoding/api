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
    envFilePath: './.env',
  }),
  MongooseModule.forFeature([{name: 'Formation', schema: FormationSchema}]),
  SharedModule,
  SharedModule.registerRmq('AUTH_SERVICE', process.env.RABBITMQ_AUTH_QUEUE),
],
  controllers: [FormationsController],
  providers: [FormationsService],
})
export class FormationsModule {}
