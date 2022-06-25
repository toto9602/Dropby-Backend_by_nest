import { Drop } from "src/drop/drop.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IsEmail } from "class-validator";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    pk:number;

    @Column("varchar", {length:20})
    nickname:string;

    @IsEmail()
    @Column("varchar", {length:30})
    email:string;

    @Column()
    password:string;

    @CreateDateColumn()
    createdAt:Date

    @Column("text")
    Refresh:string;

    @OneToMany(() => Drop, drop => drop.user)
    drops:Drop[];
};