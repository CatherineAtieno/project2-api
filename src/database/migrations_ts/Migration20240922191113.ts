import { Migration } from '@mikro-orm/migrations';

export class Migration20240922191113 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table \`business_entity\` modify \`id\` varchar(255) not null default 'kwDd7s';`);

    this.addSql(`alter table \`image_entity\` modify \`id\` varchar(255) not null default 'UlKkwl';`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table \`business_entity\` modify \`id\` varchar(255) not null default 'ymxexV';`);

    this.addSql(`alter table \`image_entity\` modify \`id\` varchar(255) not null default 'P9kWrU';`);
  }

}
