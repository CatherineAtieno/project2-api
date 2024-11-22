import { Migration } from '@mikro-orm/migrations';

export class Migration20241008081746 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table \`business_entity\` modify \`id\` varchar(255) not null default 'Ra9M5R';`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table \`business_entity\` modify \`id\` varchar(255) not null default '6YYJaT';`);
  }

}
