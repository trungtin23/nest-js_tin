// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { HttpMessage, HttpStatus } from 'src/global/enums/enum';
import { ResponeData } from 'src/global/responses/responses.global';
import { Posts } from './entities/post.entity';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  async create(@Body() createPostDto: CreatePostDto) {
    try {
      return new ResponeData<Posts>(
        HttpMessage.SUCCESS_MESSAGE,
        HttpStatus.SUCESS,
        await this.postsService.create(createPostDto),
      );
    } catch (error) {
      return new ResponeData<null>(
        error.message || HttpMessage.ERROR_MESSAGE,
        HttpStatus.ERROR,
        null,
      );
    }
  }

  @Get()
  async findAll() {
    try {
      const posts = await this.postsService.findAll();
      if (posts.length === 0) {
        return new ResponeData<null>(
          HttpMessage.NOTFOUND_MESSAGE,
          HttpStatus.NOT_FOUND,
          null,
        );
      }
      return new ResponeData<Posts>(
        HttpMessage.SUCCESS_MESSAGE,
        HttpStatus.SUCESS,
        await this.postsService.findAll(),
      );
    } catch (error) {
      return new ResponeData<null>(
        error.massage || HttpMessage.ERROR_MESSAGE,
        HttpStatus.ERROR,
        null,
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const posts = await this.postsService.findOne(id);
      if (!posts) {
        return new ResponeData<null>(
          HttpMessage.NOTFOUND_MESSAGE,
          HttpStatus.NOT_FOUND,
          null,
        );
      }
      return new ResponeData<Posts>(
        HttpMessage.SUCCESS_MESSAGE,
        HttpStatus.SUCESS,
        posts,
      );
    } catch (error) {
      return new ResponeData<null>(
        error.message || HttpMessage.ERROR_MESSAGE,
        HttpStatus.ERROR,
        null,
      );
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    try {
      const posts = await this.postsService.findOne(id);
      if (!posts) {
        return new ResponeData<null>(
          HttpMessage.NOTFOUND_MESSAGE,
          HttpStatus.NOT_FOUND,
          null,
        );
      }

      const result = await this.postsService.update(id, updatePostDto);

      if (result.affected === 0) {
        return new ResponeData<null>(
          HttpMessage.NOTFOUND_MESSAGE,
          HttpStatus.NOT_FOUND,
          null,
        );
      }

      const updatedUser = await this.postsService.findOne(id);
      return new ResponeData<Posts>(
        HttpMessage.SUCCESS_MESSAGE,
        HttpStatus.SUCESS,
        updatedUser,
      );
    } catch (error) {
      return new ResponeData<null>(
        error.message || HttpMessage.ERROR_MESSAGE,
        HttpStatus.ERROR,
        null,
      );
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const posts = await this.postsService.findOne(id);
      if (!posts) {
        return new ResponeData<null>(
          HttpMessage.NOTFOUND_MESSAGE,
          HttpStatus.NOT_FOUND,
          null,
        );
      }
      const deletePost = await this.postsService.remove(id);
      if (deletePost.affected === 0) {
        return new ResponeData<null>(
          HttpMessage.ERROR_MESSAGE,
          HttpStatus.ERROR,
          null,
        );
      }
      return new ResponeData<Posts>(
        HttpMessage.DELETE_MESSAGE,
        HttpStatus.ERROR,
        null,
      );
    } catch (error) {
      return new ResponeData<null>(
        error.message || HttpMessage.ERROR_MESSAGE,
        HttpStatus.ERROR,
        null,
      );
    }
  }
}
