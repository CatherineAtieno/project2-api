import { Migration } from '@mikro-orm/migrations';

export class Migration20240923091048 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table \`business_entity\` modify \`id\` varchar(255) not null default 'qbwYCN';`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table \`business_entity\` modify \`id\` varchar(255) not null default 'kwDd7s';`);
  }

}
