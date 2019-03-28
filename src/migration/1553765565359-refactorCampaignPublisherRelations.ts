import {MigrationInterface, QueryRunner} from "typeorm";

export class refactorCampaignPublisherRelations1553765565359 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "publisher" DROP CONSTRAINT "FK_eb64f1a2ce9c80dfe1c7f524a5b"`);
        await queryRunner.query(`CREATE TABLE "campaign_publishers_publisher" ("campaignId" uuid NOT NULL, "publisherId" uuid NOT NULL, CONSTRAINT "PK_b07fed3e8799405c96b3f7e513b" PRIMARY KEY ("campaignId", "publisherId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_50df183f7637c8022b1395b1a7" ON "campaign_publishers_publisher" ("campaignId") `);
        await queryRunner.query(`CREATE INDEX "IDX_c31c4033a8a89dec7731c3922f" ON "campaign_publishers_publisher" ("publisherId") `);
        await queryRunner.query(`ALTER TABLE "publisher" DROP COLUMN "campaignId"`);
        await queryRunner.query(`ALTER TABLE "campaign_publishers_publisher" ADD CONSTRAINT "FK_50df183f7637c8022b1395b1a7f" FOREIGN KEY ("campaignId") REFERENCES "campaign"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "campaign_publishers_publisher" ADD CONSTRAINT "FK_c31c4033a8a89dec7731c3922f6" FOREIGN KEY ("publisherId") REFERENCES "publisher"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "campaign_publishers_publisher" DROP CONSTRAINT "FK_c31c4033a8a89dec7731c3922f6"`);
        await queryRunner.query(`ALTER TABLE "campaign_publishers_publisher" DROP CONSTRAINT "FK_50df183f7637c8022b1395b1a7f"`);
        await queryRunner.query(`ALTER TABLE "publisher" ADD "campaignId" uuid`);
        await queryRunner.query(`DROP INDEX "IDX_c31c4033a8a89dec7731c3922f"`);
        await queryRunner.query(`DROP INDEX "IDX_50df183f7637c8022b1395b1a7"`);
        await queryRunner.query(`DROP TABLE "campaign_publishers_publisher"`);
        await queryRunner.query(`ALTER TABLE "publisher" ADD CONSTRAINT "FK_eb64f1a2ce9c80dfe1c7f524a5b" FOREIGN KEY ("campaignId") REFERENCES "campaign"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
