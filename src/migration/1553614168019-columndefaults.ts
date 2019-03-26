import {MigrationInterface, QueryRunner} from "typeorm";

export class columndefaults1553614168019 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "content" ALTER COLUMN "isActive" SET DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "content" ALTER COLUMN "isDeleted" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "publisher" ALTER COLUMN "isActive" SET DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "publisher" ALTER COLUMN "isDeleted" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "campaign" ALTER COLUMN "isActive" SET DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "campaign" ALTER COLUMN "isDeleted" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "campaign" ALTER COLUMN "isDeleted" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "campaign" ALTER COLUMN "isActive" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "publisher" ALTER COLUMN "isDeleted" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "publisher" ALTER COLUMN "isActive" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "content" ALTER COLUMN "isDeleted" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "content" ALTER COLUMN "isActive" DROP DEFAULT`);
    }

}
