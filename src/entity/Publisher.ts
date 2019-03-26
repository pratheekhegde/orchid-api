import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Campaign } from "./Campaign";

@Entity()
export class Publisher {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    name: string;

    @ManyToOne(type => Campaign, campaign => campaign.publishers)
    campaign: Campaign;

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
