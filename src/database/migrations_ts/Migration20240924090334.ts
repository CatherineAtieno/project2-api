import { Migration } from '@mikro-orm/migrations';

export class Migration20240924090334 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table \`business_entity\` add \`transport_type\` varchar(255) null, add \`transport_stage\` varchar(255) null;`);
    this.addSql(`alter table \`business_entity\` modify \`id\` varchar(255) not null default 'DvxLqB';`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table \`business_entity\` drop column \`transport_type\`, drop column \`transport_stage\`;`);

    this.addSql(`alter table \`business_entity\` modify \`id\` varchar(255) not null default '64zjxU';`);
  }

}
