import { Migration } from '@mikro-orm/migrations';

export class Migration20240924081653 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table \`image_entity\` modify \`id\` varchar(255) not null default 'ViD8Kl', modify \`img\` varchar(255) not null;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table \`image_entity\` modify \`id\` varchar(255) not null default '1HBkGK', modify \`img\` blob not null;`);
  }

}
