//To comment out code, you can press Ctrl + K + C
//To uncomment out code, you can press Ctrl + K + U
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';




@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: './.env',
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                url: configService.get('POSTGRES_URI'),
                autoLoadEntities: true,
                synchronize: true, //may cause data loss , need to code migrations
            }),

            inject: [ConfigService],
        }),

    ],

})
export class PostgresDBModule { }
