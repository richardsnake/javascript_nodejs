import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("USER")
export class User{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar'})
    username: string;
    @Column({type: 'varchar'})
    password: string;   
    @Column({type: 'varchar'})
    profile: string;   
}