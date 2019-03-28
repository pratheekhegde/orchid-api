import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from "typeorm";
import { Campaign } from "./Campaign";

@Entity()
export class Publisher extends BaseEntity{

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    name: string;

    @Column({
        default: true
    })
    isActive: boolean;

    @Column({
        select: false,
        default: false
    })
    isDeleted: boolean;
}
