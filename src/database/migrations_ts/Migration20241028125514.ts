import { Migration } from '@mikro-orm/migrations';

export class Migration20241028125514 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table \`business_entity\` modify \`id\` varchar(255) not null default 'fl0skq';`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table \`business_entity\` modify \`id\` varchar(255) not null default 'WvIUbb';`);
  }

}
