import { MinLength } from 'class-validator';

export class UpdateUserDto {
  id: string;

  userName: string;

  @MinLength(8, { message: ' Mật khẩu phải có ít nhất 8 kí tự' })
  password: string;

  fullName: string;

  age: string;
}
