import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable: true})
    Primeironome?: string;

 

    @Column({nullable: true})
    idade?: number;
}