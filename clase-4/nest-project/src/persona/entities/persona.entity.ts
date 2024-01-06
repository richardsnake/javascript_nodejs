
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Persona{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar'
    })
    dni: string;
    @Column({
        type: 'varchar'
    })
    names: string;
    @Column({
        type: 'varchar'
    })
    lastname: string;
    @Column({
        type: 'varchar'
    })
    birthdate: string;
    @Column({
        type: 'varchar'
    })
    sex: string;
}