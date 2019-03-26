import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Campaign } from "./Campaign";

@Entity()
export class Content extends BaseEntity{

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    name: string;

    @Column()
    type: string;

    @Column({
        default: true
    })
    isActive: boolean;

    @Column({
        select: false,
        default: false
    })
    isDeleted: boolean;

    @OneToMany(type => Campaign, campaign => campaign.content)
    campaigns: Campaign[];

    @CreateDateColumn({ type: 'timestamptz' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz' })
    updatedAt: Date;

}

