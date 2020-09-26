import { Type } from "class-transformer";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('posts')
export class Post{
    @PrimaryGeneratedColumn()
    id:number;
    @Column({type:'text', nullable: false})
    slug!:string;
    @Column({type:'varchar', length: 150, nullable: false})
    title!:string;
    @Column({type:'varchar', length: 255, nullable: false})
    excerpt?:string;
    @Column({type:'text'})
    content!:string;
    @Column({type:'varchar', length: 255, nullable: true})
    category:string;
    @Column({type:'simple-array'})
    tags:string[];
    @Column({type:'bool', default:true})
    status:boolean;
    @CreateDateColumn({type:'timestamp'})
    createdAt:Date;
}