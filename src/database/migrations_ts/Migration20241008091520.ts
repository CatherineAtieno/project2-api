import { Migration } from '@mikro-orm/migrations';

export class Migration20241008091520 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table \`admin_entity\` modify \`id\` varchar(255) not null default '5ORsZW';`);

    this.addSql(`alter table \`business_entity\` add \`rating\` int null;`);
    this.addSql(`alter table \`business_entity\` modify \`id\` varchar(255) not null default 'WvIUbb';`);

    this.addSql(`alter table \`transport_entity\` modify \`id\` varchar(255) not null default '1yHIHV';`);

    this.addSql(`alter table \`service_entity\` modify \`id\` varchar(255) not null default 'syNhab';`);

    this.addSql(`alter table \`review_entity\` modify \`id\` varchar(255) not null default 'QD0PCD';`);

    this.addSql(`alter table \`image_entity\` modify \`id\` varchar(255) not null default 'lVFHQV';`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table \`admin_entity\` modify \`id\` varchar(255) not null default '9KhS6g';`);

    this.addSql(`alter table \`business_entity\` drop column \`rating\`;`);

    this.addSql(`alter table \`business_entity\` modify \`id\` varchar(255) not null default 'Ra9M5R';`);

    this.addSql(`alter table \`transport_entity\` modify \`id\` varchar(255) not null default 'f1DZpv';`);

    this.addSql(`alter table \`service_entity\` modify \`id\` varchar(255) not null default 'fzDZoO';`);

    this.addSql(`alter table \`review_entity\` modify \`id\` varchar(255) not null default 'U9fB16';`);

    this.addSql(`alter table \`image_entity\` modify \`id\` varchar(255) not null default 'ViD8Kl';`);
  }

}
