import { Migration } from '@mikro-orm/migrations';

export class Migration20240929170405 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table \`business_entity\` modify \`id\` varchar(255) not null default '9Jrgi2';`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table \`business_entity\` modify \`id\` varchar(255) not null default 'eu1zwk';`);
  }

}
