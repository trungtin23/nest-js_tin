import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<Users | null> {
    return this.usersRepository.findOne({
      where: { id },
      relations: ['posts'],
    });
  }

  async create(createUserDto: CreateUserDto): Promise<Users> {
    return await this.usersRepository.save(createUserDto);
  }

  // eslint-disable-next-line prettier/prettier
  async update( id: string, updateUserDto: UpdateUserDto): Promise<UpdateResult> {
    return await this.usersRepository.update(id, updateUserDto);
  }
  async delete(id): Promise<DeleteResult> {
    return await this.usersRepository.delete(id);
  }
}
