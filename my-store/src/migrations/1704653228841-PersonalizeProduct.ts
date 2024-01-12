import { MigrationInterface, QueryRunner } from "typeorm";

export class PersonalizeProduct1704653228841 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE product
            ADD COLUMN "start_date" timestamptz,
            ADD COLUMN "duration_in_minutes" int;`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE product
              DROP COLUMN "start_date",
              DROP COLUMN "duration_in_minutes";`
    );
  }
}
