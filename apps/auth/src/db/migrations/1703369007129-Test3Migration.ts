import { MigrationInterface, QueryRunner } from "typeorm";

export class Test3Migration1703369007129 implements MigrationInterface {
    name = 'Test3Migration1703369007129'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "fullName" TO "fName"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "fName" TO "fullName"`);
    }

}
