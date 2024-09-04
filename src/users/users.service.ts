import { Users } from './user.entity/user.entity';
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
    return this.usersRepository.findOneBy({ id });
  }

  async create(user: Users): Promise<Users> {
    return await this.usersRepository.save(user);
  }

  async update(id: string, user: Users): Promise<UpdateResult> {
    return await this.usersRepository.update(id, user);
  }
  async delete(id): Promise<DeleteResult> {
    return await this.usersRepository.delete(id);
  }
}
