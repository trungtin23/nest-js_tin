// eslint-disable-next-line prettier/prettier
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './user.entity/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }
  @Post()
  create(@Body() user: Users) {
    return this.usersService.create(user);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() user: Users) {
    return this.usersService.update(id, user);
  }
  @Delete(':id')
  deleteUser(@Param() params) {
    return this.usersService.delete(params.id);
  }
}
