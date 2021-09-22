import { PrimaryGeneratedColumn, ManyToMany, Column, Entity, ManyToOne } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Pet {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(type=> User, user => user.pets)
    owner: User
}