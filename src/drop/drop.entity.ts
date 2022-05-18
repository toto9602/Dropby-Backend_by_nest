import { User } from "src/user/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Drop {
    @PrimaryGeneratedColumn()
    pk:number;

    @Column("varchar", {length:20})
    title:string;

    @Column("text")
    content:string;

    @CreateDateColumn()
    createdAt:Date

    @ManyToOne(() => User, user => user.drops)
    user:User;
};