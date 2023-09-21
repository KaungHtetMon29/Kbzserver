import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name:"testtable"})
class testtable {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string
}
export default testtable;