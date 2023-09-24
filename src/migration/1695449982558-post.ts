import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class Post1695449982558 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "post",
        columns: [
          {
            name: "postid",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "title",
            type: "text",
            isNullable: false,
          },
          {
            name: "img",
            type: "text",
            isNullable: false,
          },
          { name: "date", type: "varchar", length: "25", isNullable: false },
          { name: "post", type: "text", isNullable: false },
          { name: "benefit", type: "text", isNullable: false },
          {
            name: "category",
            type: "varchar",
            length: "255",
            isNullable: false,
          },
          { name: "tag", type: "varchar", length: "255", isNullable: false },
          { name: "userid", type: "int", isNullable: false },
        ],
      })
    );
    await queryRunner.createForeignKey(
      "post",
      new TableForeignKey({
        columnNames: ["userid"],
        referencedTableName: "useracc",
        referencedColumnNames: ["id"],
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
