import { Migration } from '@mikro-orm/migrations';

export class Migration20240924075216 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table \`business_entity\` modify \`id\` varchar(255) not null default '64zjxU';`);

    this.addSql(`alter table \`image_entity\` modify \`id\` varchar(255) not null default '1HBkGK';`);
    this.addSql(`alter table \`image_entity\` change \`_img\` \`img\` blob not null;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table \`business_entity\` modify \`id\` varchar(255) not null default '1folZ7';`);

    this.addSql(`alter table \`image_entity\` modify \`id\` varchar(255) not null default 'XzcQsX';`);
    this.addSql(`alter table \`image_entity\` change \`img\` \`_img\` blob not null;`);
  }

}
