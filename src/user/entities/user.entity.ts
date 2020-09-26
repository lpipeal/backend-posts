import { hash } from "bcryptjs";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User{
    @PrimaryGeneratedColumn()
    id:number;
    @Column({name:"identification_type",type:"varchar", length:"40", nullable: false})
    identificationType!:string;
    @Column({name:"identification_number",type:"varchar", length:"40", nullable: false})
    identificationNumber!:string;
    @Column({name:"name",type:"varchar", length:"40"})
    name!:string;
    @Column({name:"last_name",type:"varchar", length:"40"})
    lastName!:string;
    @Column({type:"varchar", length:"60", nullable: false})
    email!:string;
    @CreateDateColumn({name:"birth_date",type:"timestamp"})
    birthDate!:Date;
    @Column({type:"varchar", length:"128", nullable:false, select:false})
    password!:string;
    @Column({type:"bool", default:false})
    status!:boolean;
    @CreateDateColumn({name:"create_date",type:"timestamp"})
    createDate:Date;

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword(){
        if (!this.password){
            return;
        } 
        this.password=await hash(this.password,10);
    }


}
