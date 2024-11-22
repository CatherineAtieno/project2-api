import { Migration } from '@mikro-orm/migrations';

export class Migration20240920105947 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table \`user_entity\` (\`id\` varchar(255) not null, \`first_name\` varchar(255) not null, \`last_name\` varchar(255) not null, \`email\` varchar(255) not null, \`role\` varchar(255) not null default 'resident', \`password\` varchar(255) not null, primary key (\`id\`)) default character set utf8mb4 engine = InnoDB;`);

    this.addSql(`create table \`business_entity\` (\`id\` varchar(255) not null default 'dGnC69', \`name\` varchar(255) not null, \`phone\` varchar(255) not null, \`email\` varchar(255) not null, \`location\` varchar(255) not null, \`kind\` varchar(255) not null default 'hotel', \`images\` text null, \`owner_id\` varchar(255) not null, primary key (\`id\`)) default character set utf8mb4 engine = InnoDB;`);
    this.addSql(`alter table \`business_entity\` add index \`business_entity_owner_id_index\`(\`owner_id\`);`);

    this.addSql(`create table \`service_entity\` (\`id\` varchar(255) not null default '3AxVCR', \`name\` varchar(255) not null, \`price\` int null, \`business_id\` varchar(255) null, primary key (\`id\`)) default character set utf8mb4 engine = InnoDB;`);
    this.addSql(`alter table \`service_entity\` add index \`service_entity_business_id_index\`(\`business_id\`);`);

    this.addSql(`alter table \`business_entity\` add constraint \`business_entity_owner_id_foreign\` foreign key (\`owner_id\`) references \`user_entity\` (\`id\`) on update cascade;`);

    this.addSql(`alter table \`service_entity\` add constraint \`service_entity_business_id_foreign\` foreign key (\`business_id\`) references \`business_entity\` (\`id\`) on update cascade on delete cascade;`);

    this.addSql(`alter table \`admin_entity\` modify \`id\` varchar(255) not null default '9KhS6g';`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table \`business_entity\` drop foreign key \`business_entity_owner_id_foreign\`;`);

    this.addSql(`alter table \`service_entity\` drop foreign key \`service_entity_business_id_foreign\`;`);

    this.addSql(`drop table if exists \`user_entity\`;`);

    this.addSql(`drop table if exists \`business_entity\`;`);

    this.addSql(`drop table if exists \`service_entity\`;`);

    this.addSql(`alter table \`admin_entity\` modify \`id\` varchar(255) not null default 'h6fI23';`);
  }

}
