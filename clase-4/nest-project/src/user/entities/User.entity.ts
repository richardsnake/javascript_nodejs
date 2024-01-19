import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import * as bcrypt from "bcrypt";

@Entity("USER")
export class User{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', unique: true})
    username: string;
    @Column({type: 'varchar'})
    password: string;   
    @Column({type: 'varchar'})
    profile: string;   

    async validatePassword(password: string): Promise<boolean>
    {
        return bcrypt.compare(password, this.password);
    }
}