import { Migration } from '@mikro-orm/migrations';

export class Migration20240923101220 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table \`business_entity\` modify \`id\` varchar(255) not null default '1folZ7';`);

    this.addSql(`alter table \`image_entity\` modify \`id\` varchar(255) not null default 'SwV47l';`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table \`business_entity\` modify \`id\` varchar(255) not null default 'qbwYCN';`);

    this.addSql(`alter table \`image_entity\` modify \`id\` varchar(255) not null default 'UlKkwl';`);
  }

}
