import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  department: string;

  @Column()
  phoneNbr: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;
  
  @Column({ select: false , default: 'user'})
  role: string;


}
