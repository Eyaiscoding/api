import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { NewUserDTO } from './dtos/new-user.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) { }

  async getUsers() {
    return this.userRepository.find();
  }

  async findByEmail(email: string):
    Promise<UserEntity> {
    return this.userRepository.findOne({
      where: { email },
      select: ['id', 'fullName', 'phoneNbr', 'jobRole', 'email', 'password'],
    });
  }

  // hashes password 12 times
  async hashPassword(password: string):
    Promise<string> {
      return bcrypt.hash(password, 12);
  }


  async register(newUser: Readonly<NewUserDTO>)
    : Promise<UserEntity> {
    const { fullName, jobRole, phoneNbr, email, password } = newUser;
    const existingUser = await this.findByEmail(email);
    if (existingUser) {
      throw new ConflictException('An account with that email already exists!');
    }

    const hashedPassword = await this.hashPassword(password);
    const savedUser = await this.userRepository.save({
      fullName , jobRole , phoneNbr , email , password: hashedPassword,
    });

    delete savedUser.password;
    return savedUser;
  }

}
