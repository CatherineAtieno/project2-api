import { Migration } from '@mikro-orm/migrations';

export class Migration20240920204838 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table \`business_entity\` drop foreign key \`business_entity_owner_id_foreign\`;`);

    this.addSql(`alter table \`business_entity\` modify \`id\` varchar(255) not null default 'g1V4wv', modify \`owner_id\` varchar(255) null;`);
    this.addSql(`alter table \`business_entity\` add constraint \`business_entity_owner_id_foreign\` foreign key (\`owner_id\`) references \`user_entity\` (\`id\`) on update cascade on delete set null;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table \`business_entity\` drop foreign key \`business_entity_owner_id_foreign\`;`);

    this.addSql(`alter table \`business_entity\` modify \`id\` varchar(255) not null default 'dGnC69', modify \`owner_id\` varchar(255) not null;`);
    this.addSql(`alter table \`business_entity\` add constraint \`business_entity_owner_id_foreign\` foreign key (\`owner_id\`) references \`user_entity\` (\`id\`) on update cascade;`);
  }

}
