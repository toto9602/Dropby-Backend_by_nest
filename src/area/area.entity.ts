import { Place } from "src/place/place.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Area {
    @PrimaryGeneratedColumn()
    pk:number;

    @Column("varchar", {length:20})
    name:string;

    @Column("polygon")
    polygon:string;

    @OneToMany(() => Place, place => place.area)
    places:Place[];
};