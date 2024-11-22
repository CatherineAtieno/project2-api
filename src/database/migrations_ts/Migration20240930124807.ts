import { Migration } from '@mikro-orm/migrations';

export class Migration20240930124807 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table \`transport_entity\` (\`id\` varchar(255) not null default 'f1DZpv', \`type\` varchar(255) not null, \`stage\` varchar(255) null, \`place_id\` varchar(255) not null, primary key (\`id\`)) default character set utf8mb4 engine = InnoDB;`);
    this.addSql(`alter table \`transport_entity\` add index \`transport_entity_place_id_index\`(\`place_id\`);`);

    this.addSql(`alter table \`transport_entity\` add constraint \`transport_entity_place_id_foreign\` foreign key (\`place_id\`) references \`business_entity\` (\`id\`) on update cascade;`);

    this.addSql(`alter table \`business_entity\` drop column \`transport_type\`, drop column \`transport_stage\`;`);

    this.addSql(`alter table \`business_entity\` modify \`id\` varchar(255) not null default '6YYJaT';`);

    this.addSql(`alter table \`service_entity\` modify \`id\` varchar(255) not null default 'SeWB5I';`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists \`transport_entity\`;`);

    this.addSql(`alter table \`business_entity\` add \`transport_type\` varchar(255) null, add \`transport_stage\` varchar(255) null;`);
    this.addSql(`alter table \`business_entity\` modify \`id\` varchar(255) not null default '9Jrgi2';`);

    this.addSql(`alter table \`service_entity\` modify \`id\` varchar(255) not null default '3AxVCR';`);
  }

}
