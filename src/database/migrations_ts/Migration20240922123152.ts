import { Migration } from '@mikro-orm/migrations';

export class Migration20240922123152 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table \`image_entity\` (\`id\` varchar(255) not null default 'P9kWrU', \`img\` blob not null, \`place_id\` varchar(255) not null, primary key (\`id\`)) default character set utf8mb4 engine = InnoDB;`);
    this.addSql(`alter table \`image_entity\` add index \`image_entity_place_id_index\`(\`place_id\`);`);

    this.addSql(`alter table \`image_entity\` add constraint \`image_entity_place_id_foreign\` foreign key (\`place_id\`) references \`business_entity\` (\`id\`) on update cascade;`);

    this.addSql(`alter table \`business_entity\` drop column \`images\`;`);

    this.addSql(`alter table \`business_entity\` modify \`id\` varchar(255) not null default 'ymxexV';`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists \`image_entity\`;`);

    this.addSql(`alter table \`business_entity\` add \`images\` blob null;`);
    this.addSql(`alter table \`business_entity\` modify \`id\` varchar(255) not null default 'CQBrPm';`);
  }

}
