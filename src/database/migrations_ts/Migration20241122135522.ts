import { Migration } from '@mikro-orm/migrations';

export class Migration20241122135522 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table \`admin_entity\` (\`id\` varchar(255) not null default 'ssk6Cn', \`user_name\` varchar(255) not null, \`email\` varchar(255) not null, \`password\` varchar(255) not null, primary key (\`id\`)) default character set utf8mb4 engine = InnoDB;`);
    this.addSql(`alter table \`admin_entity\` add unique \`admin_entity_user_name_unique\`(\`user_name\`);`);
    this.addSql(`alter table \`admin_entity\` add unique \`admin_entity_email_unique\`(\`email\`);`);

    this.addSql(`create table \`transport_entity\` (\`id\` varchar(255) not null default 'aa5XHK', \`type\` varchar(255) not null, \`stage\` varchar(255) null, \`place_id\` varchar(255) not null, primary key (\`id\`)) default character set utf8mb4 engine = InnoDB;`);
    this.addSql(`alter table \`transport_entity\` add index \`transport_entity_place_id_index\`(\`place_id\`);`);

    this.addSql(`create table \`review_entity\` (\`id\` varchar(255) not null default 'kGRhVs', \`user_id\` varchar(255) not null, \`stars\` numeric(10,0) not null, \`place_id\` varchar(255) not null, \`review\` varchar(255) null, primary key (\`id\`)) default character set utf8mb4 engine = InnoDB;`);
    this.addSql(`alter table \`review_entity\` add index \`review_entity_user_id_index\`(\`user_id\`);`);
    this.addSql(`alter table \`review_entity\` add index \`review_entity_place_id_index\`(\`place_id\`);`);

    this.addSql(`create table \`image_entity\` (\`id\` varchar(255) not null default 'R0ztqb', \`img\` varchar(255) not null, \`place_id\` varchar(255) not null, primary key (\`id\`)) default character set utf8mb4 engine = InnoDB;`);
    this.addSql(`alter table \`image_entity\` add index \`image_entity_place_id_index\`(\`place_id\`);`);

    this.addSql(`alter table \`transport_entity\` add constraint \`transport_entity_place_id_foreign\` foreign key (\`place_id\`) references \`business_entity\` (\`id\`) on update cascade;`);

    this.addSql(`alter table \`review_entity\` add constraint \`review_entity_user_id_foreign\` foreign key (\`user_id\`) references \`user_entity\` (\`id\`) on update cascade;`);
    this.addSql(`alter table \`review_entity\` add constraint \`review_entity_place_id_foreign\` foreign key (\`place_id\`) references \`business_entity\` (\`id\`) on update cascade;`);

    this.addSql(`alter table \`image_entity\` add constraint \`image_entity_place_id_foreign\` foreign key (\`place_id\`) references \`business_entity\` (\`id\`) on update cascade;`);

    this.addSql(`alter table \`business_entity\` drop foreign key \`business_entity_owner_id_foreign\`;`);

    this.addSql(`alter table \`service_entity\` drop foreign key \`service_entity_business_id_foreign\`;`);

    this.addSql(`alter table \`business_entity\` drop column \`images\`;`);

    this.addSql(`alter table \`business_entity\` add \`address_town\` varchar(255) not null, add \`address_street\` varchar(255) null, add \`address_maps\` varchar(255) null, add \`rating\` int null;`);
    this.addSql(`alter table \`business_entity\` modify \`id\` varchar(255) not null default 'POhTzi', modify \`owner_id\` varchar(255) null;`);
    this.addSql(`alter table \`business_entity\` change \`location\` \`address_county\` varchar(255) not null;`);
    this.addSql(`alter table \`business_entity\` add constraint \`business_entity_owner_id_foreign\` foreign key (\`owner_id\`) references \`user_entity\` (\`id\`) on update cascade on delete set null;`);

    this.addSql(`alter table \`service_entity\` modify \`id\` varchar(255) not null default 'wTD15U', modify \`business_id\` varchar(255) not null;`);
    this.addSql(`alter table \`service_entity\` add constraint \`service_entity_business_id_foreign\` foreign key (\`business_id\`) references \`business_entity\` (\`id\`) on update cascade;`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists \`admin_entity\`;`);

    this.addSql(`drop table if exists \`transport_entity\`;`);

    this.addSql(`drop table if exists \`review_entity\`;`);

    this.addSql(`drop table if exists \`image_entity\`;`);

    this.addSql(`alter table \`business_entity\` drop foreign key \`business_entity_owner_id_foreign\`;`);

    this.addSql(`alter table \`service_entity\` drop foreign key \`service_entity_business_id_foreign\`;`);

    this.addSql(`alter table \`business_entity\` drop column \`address_town\`, drop column \`address_street\`, drop column \`address_maps\`, drop column \`rating\`;`);

    this.addSql(`alter table \`business_entity\` add \`images\` text null;`);
    this.addSql(`alter table \`business_entity\` modify \`id\` varchar(255) not null default 'dGnC69', modify \`owner_id\` varchar(255) not null;`);
    this.addSql(`alter table \`business_entity\` change \`address_county\` \`location\` varchar(255) not null;`);
    this.addSql(`alter table \`business_entity\` add constraint \`business_entity_owner_id_foreign\` foreign key (\`owner_id\`) references \`user_entity\` (\`id\`) on update cascade on delete no action;`);

    this.addSql(`alter table \`service_entity\` modify \`id\` varchar(255) not null default '3AxVCR', modify \`business_id\` varchar(255) null;`);
    this.addSql(`alter table \`service_entity\` add constraint \`service_entity_business_id_foreign\` foreign key (\`business_id\`) references \`business_entity\` (\`id\`) on update cascade on delete cascade;`);
  }

}
