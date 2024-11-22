import { Migration } from '@mikro-orm/migrations';

export class Migration20240922121205 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table \`business_entity\` add \`address_town\` varchar(255) not null, add \`address_street\` varchar(255) null, add \`address_maps\` varchar(255) null;`);
    this.addSql(`alter table \`business_entity\` modify \`id\` varchar(255) not null default 'CQBrPm';`);
    this.addSql(`alter table \`business_entity\` change \`location\` \`address_county\` varchar(255) not null;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table \`business_entity\` drop column \`address_town\`, drop column \`address_street\`, drop column \`address_maps\`;`);

    this.addSql(`alter table \`business_entity\` modify \`id\` varchar(255) not null default 'j4f9mk';`);
    this.addSql(`alter table \`business_entity\` change \`address_county\` \`location\` varchar(255) not null;`);
  }

}
