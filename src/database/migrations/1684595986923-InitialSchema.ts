import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialSchema1684595986923 implements MigrationInterface {
  name = 'InitialSchema1684595986923';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "payment_orders" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_date" TIMESTAMP NOT NULL DEFAULT now(), "updated_date" TIMESTAMP NOT NULL DEFAULT now(), "order_id" text, "amount" text, "currency" text NOT NULL DEFAULT '0', "status" text, "analytics_updated" text NOT NULL DEFAULT false, "wallet_updated" text NOT NULL DEFAULT false, CONSTRAINT "PK_158dd178010c39759305293a149" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "wallet_entries" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_date" TIMESTAMP NOT NULL DEFAULT now(), "updated_date" TIMESTAMP NOT NULL DEFAULT now(), "amount" text NOT NULL, "walletId" uuid, CONSTRAINT "PK_43159f70238df34adbec8b05505" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "wallets" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_date" TIMESTAMP NOT NULL DEFAULT now(), "updated_date" TIMESTAMP NOT NULL DEFAULT now(), "owner" text NOT NULL, "available_balance" text NOT NULL DEFAULT '0', "balance" text NOT NULL DEFAULT '0', "type" text, "currency" text, "active" text DEFAULT false, CONSTRAINT "PK_8402e5df5a30a229380e83e4f7e" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_date" TIMESTAMP NOT NULL DEFAULT now(), "updated_date" TIMESTAMP NOT NULL DEFAULT now(), "address_type" text NOT NULL, "address_hash" text NOT NULL, "active" text DEFAULT false, "walletId" uuid, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "billing" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_date" TIMESTAMP NOT NULL DEFAULT now(), "updated_date" TIMESTAMP NOT NULL DEFAULT now(), "raised_by" text NOT NULL, "type" text, "order_id" text, "total_amount" text NOT NULL DEFAULT '0', "currency" text, "auto_generated" text NOT NULL DEFAULT false, "archived" text NOT NULL DEFAULT false, CONSTRAINT "PK_d9043caf3033c11ed3d1b29f73c" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "transactions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_date" TIMESTAMP NOT NULL DEFAULT now(), "updated_date" TIMESTAMP NOT NULL DEFAULT now(), "initiator" text NOT NULL, "recipient" text NOT NULL, "amount" text, "type" text NOT NULL, "description" text NOT NULL, "status" text NOT NULL DEFAULT false, CONSTRAINT "PK_a219afd8dd77ed80f5a862f1db9" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "transfers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_date" TIMESTAMP NOT NULL DEFAULT now(), "updated_date" TIMESTAMP NOT NULL DEFAULT now(), "amount" text NOT NULL DEFAULT '0', "type" text, "currency" text, "fromWalletIdId" uuid, "toWalletIdId" uuid, CONSTRAINT "PK_f712e908b465e0085b4408cabc3" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "wallet_entries" ADD CONSTRAINT "FK_22372978cfa286d72ca6bb5a5f4" FOREIGN KEY ("walletId") REFERENCES "wallets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "address" ADD CONSTRAINT "FK_d64b03f42b8bcc40894545264d7" FOREIGN KEY ("walletId") REFERENCES "wallets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "transfers" ADD CONSTRAINT "FK_f77dd7a1f4adac7c0ff0e1973fd" FOREIGN KEY ("fromWalletIdId") REFERENCES "wallets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "transfers" ADD CONSTRAINT "FK_d43eb354172c97e1152398099df" FOREIGN KEY ("toWalletIdId") REFERENCES "wallets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "transfers" DROP CONSTRAINT "FK_d43eb354172c97e1152398099df"`,
    );
    await queryRunner.query(
      `ALTER TABLE "transfers" DROP CONSTRAINT "FK_f77dd7a1f4adac7c0ff0e1973fd"`,
    );
    await queryRunner.query(
      `ALTER TABLE "address" DROP CONSTRAINT "FK_d64b03f42b8bcc40894545264d7"`,
    );
    await queryRunner.query(
      `ALTER TABLE "wallet_entries" DROP CONSTRAINT "FK_22372978cfa286d72ca6bb5a5f4"`,
    );
    await queryRunner.query(`DROP TABLE "transfers"`);
    await queryRunner.query(`DROP TABLE "transactions"`);
    await queryRunner.query(`DROP TABLE "billing"`);
    await queryRunner.query(`DROP TABLE "address"`);
    await queryRunner.query(`DROP TABLE "wallets"`);
    await queryRunner.query(`DROP TABLE "wallet_entries"`);
    await queryRunner.query(`DROP TABLE "payment_orders"`);
  }
}
