import { Migration } from '@mikro-orm/migrations';

export class Migration20240922104907 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table \`business_entity\` modify \`id\` varchar(255) not null default 'j4f9mk', modify \`images\` blob;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table \`business_entity\` modify \`id\` varchar(255) not null default 'g1V4wv', modify \`images\` text;`);
  }

}
