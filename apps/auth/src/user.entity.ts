import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true})
    fullName: string;

    @Column()
    jobRole: string;

    @Column()
    phoneNbr: string;

    @Column({ unique: true})
    email: string;

    @Column({ select: false})
    password: string;
}