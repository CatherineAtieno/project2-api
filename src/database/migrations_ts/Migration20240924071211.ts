import { Migration } from '@mikro-orm/migrations';

export class Migration20240924071211 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table \`image_entity\` modify \`id\` varchar(255) not null default 'XzcQsX';`);
    this.addSql(`alter table \`image_entity\` change \`img\` \`_img\` blob not null;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table \`image_entity\` modify \`id\` varchar(255) not null default 'SwV47l';`);
    this.addSql(`alter table \`image_entity\` change \`_img\` \`img\` blob not null;`);
  }

}
