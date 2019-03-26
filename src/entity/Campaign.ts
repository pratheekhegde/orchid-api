import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Content } from "./Content";
import { Publisher } from "./Publisher";

@Entity()
export class Campaign {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    name: string;

    @ManyToOne(type => Content, content => content.campaigns)
    content: Content;

    @Column({
        default: true
    })
    isActive: boolean;

    @Column({
        select: false,
        default: false
    })
    isDeleted: boolean;

    @Column({ type: 'timestamptz' })
    campaignStartDate: Date;

    @Column({ type: 'timestamptz' })
    campaignEndDate: Date;

    @OneToMany(type => Publisher, publisher => publisher.campaign)
    publishers: Publisher[];
}
