import { DataSource, DataSourceOptions } from "typeorm";
import { UserEntity } from "../user.entity";

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    url: Buffer.from(process.env.POSTGRES_URI, 'base64').toString('utf-8'),
    entities: [UserEntity],
    migrations: ['dist/apps/auth/db/migrations/*.js']
};

export const dataSource = new DataSource(dataSourceOptions);
