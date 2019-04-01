import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable, ManyToMany } from "typeorm";
import { Content } from "./Content";
import { Publisher } from "./Publisher";

@Entity()
export class Campaign extends BaseEntity{

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    name: string;

    @ManyToOne(type => Content, content => content.campaigns, {
        eager: true
    })
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
    startDate: Date;

    @Column({ type: 'timestamptz' })
    endDate: Date;

    @ManyToMany(type => Publisher,{
        eager: true
    })
    @JoinTable()
    publishers: Publisher[];
}
