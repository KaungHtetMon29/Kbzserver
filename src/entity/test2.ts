import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name:"test2"})
class test2 {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string
}
export default test2;