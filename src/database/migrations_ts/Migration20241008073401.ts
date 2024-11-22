import { Migration } from '@mikro-orm/migrations';

export class Migration20241008073401 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table \`service_entity\` drop foreign key \`service_entity_business_id_foreign\`;`);

    this.addSql(`alter table \`service_entity\` modify \`id\` varchar(255) not null default 'fzDZoO', modify \`business_id\` varchar(255) not null;`);
    this.addSql(`alter table \`service_entity\` add constraint \`service_entity_business_id_foreign\` foreign key (\`business_id\`) references \`business_entity\` (\`id\`) on update cascade;`);

    this.addSql(`alter table \`review_entity\` modify \`id\` varchar(255) not null default 'U9fB16';`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table \`service_entity\` drop foreign key \`service_entity_business_id_foreign\`;`);

    this.addSql(`alter table \`service_entity\` modify \`id\` varchar(255) not null default 'SeWB5I', modify \`business_id\` varchar(255) null;`);
    this.addSql(`alter table \`service_entity\` add constraint \`service_entity_business_id_foreign\` foreign key (\`business_id\`) references \`business_entity\` (\`id\`) on update cascade on delete cascade;`);

    this.addSql(`alter table \`review_entity\` modify \`id\` varchar(255) not null default 'Tsknby';`);
  }

}
