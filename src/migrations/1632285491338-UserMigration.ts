import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1632285491338 implements MigrationInterface {
    name = 'UserMigration1632285491338'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`nestjs_typeorm_two\`.\`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`nestjs_typeorm_two\`.\`user\``);
    }

}
