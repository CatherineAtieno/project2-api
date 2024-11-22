import { Migration } from '@mikro-orm/migrations';

export class Migration20240929165507 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table \`review_entity\` (\`id\` varchar(255) not null default 'Tsknby', \`user_id\` varchar(255) not null, \`stars\` numeric(10,0) not null, \`place_id\` varchar(255) not null, \`review\` varchar(255) null, primary key (\`id\`)) default character set utf8mb4 engine = InnoDB;`);
    this.addSql(`alter table \`review_entity\` add index \`review_entity_user_id_index\`(\`user_id\`);`);
    this.addSql(`alter table \`review_entity\` add index \`review_entity_place_id_index\`(\`place_id\`);`);

    this.addSql(`alter table \`review_entity\` add constraint \`review_entity_user_id_foreign\` foreign key (\`user_id\`) references \`user_entity\` (\`id\`) on update cascade;`);
    this.addSql(`alter table \`review_entity\` add constraint \`review_entity_place_id_foreign\` foreign key (\`place_id\`) references \`business_entity\` (\`id\`) on update cascade;`);

    this.addSql(`alter table \`business_entity\` modify \`id\` varchar(255) not null default 'eu1zwk';`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists \`review_entity\`;`);

    this.addSql(`alter table \`business_entity\` modify \`id\` varchar(255) not null default 'DvxLqB';`);
  }

}
