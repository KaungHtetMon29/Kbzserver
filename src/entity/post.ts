import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import user from "./user";
@Entity({ name: "post" })
class post {
  @PrimaryGeneratedColumn()
  postid: number;
  @Column({ nullable: false })
  title: string;
  @Column({ nullable: false })
  img: string;
  @Column({ nullable: false })
  date: string;
  @Column({ nullable: false })
  post: string;
  @Column({ nullable: false })
  benefit: string;
  @Column({ nullable: false })
  category: string;
  @Column({ nullable: false })
  tag: string;
  @Column()
  userid: string;
}
export default post;
