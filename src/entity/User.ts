import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import post from "./post";

@Entity({ name: "useracc" })
class useracc {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false })
  name: string;
  @Column({ nullable: false })
  pw: string;
  @Column({ nullable: false, type: "bytea" })
  img: string;
}
export default useracc;
