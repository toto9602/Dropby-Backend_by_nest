import { Area } from "src/area/area.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Place {
    @PrimaryGeneratedColumn()
    pk:number;

    @Column("varchar", {length:10})
    name:string;

    @Column("float")
    latitude:number;

    @Column("float")
    longitude:number;

    @Column("varchar", {length:50})
    address:string;

    @ManyToOne(() => Area, area => area.places)
    area:Area;
};