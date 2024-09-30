import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from './entities/post.entity';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts)
    private PostRepository: Repository<Posts>,
  ) {}

  async create(createPostDto: CreatePostDto): Promise<Posts> {
    return await this.PostRepository.save(createPostDto);
  }

  findAll(): Promise<Posts[]> {
    return this.PostRepository.find();
  }

  findOne(id: string): Promise<Posts | null> {
    return this.PostRepository.findOneBy({ id });
  }

  // eslint-disable-next-line prettier/prettier
  async update( id: string, updatePostDto: UpdatePostDto ): Promise<UpdateResult> {
    return await this.PostRepository.update(id, updatePostDto);
  }

  remove(id: string): Promise<DeleteResult> {
    return this.PostRepository.delete({ id });
  }
}
