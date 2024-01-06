import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column({type: 'int'})
    number: Number;

    @Column({type: 'varchar'})
    serial: string;

    @Column({type: 'varchar'})
    description: string;

    @Column({type: 'int'})
    amount: Number;

}
