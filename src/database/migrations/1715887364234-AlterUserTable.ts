import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterUserTable1715887364234 implements MigrationInterface {
    name = 'AlterUserTable1715887364234'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "document" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD "telephone" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD "cooperatedId" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_dbe52719290b06d750a00295e08" UNIQUE ("cooperatedId")`);
        await queryRunner.query(`CREATE INDEX "IDX_71fdad8489d3d818ec393e6eb1" ON "user" ("document") `);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_dbe52719290b06d750a00295e08" FOREIGN KEY ("cooperatedId") REFERENCES "cooperated"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_dbe52719290b06d750a00295e08"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_71fdad8489d3d818ec393e6eb1"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_dbe52719290b06d750a00295e08"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "cooperatedId"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "telephone"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "document"`);
    }

}
