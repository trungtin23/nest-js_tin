import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  id: string;

  @IsNotEmpty({ message: 'Chưa nhập tài khoản' })
  userName: string;

  @MinLength(8, { message: ' Mật khẩu phải có ít nhất 8 kí tự' })
  @IsNotEmpty({ message: 'Chưa nhập mật khẩu' })
  password: string;

  @IsNotEmpty({ message: 'Chưa nhập Họ Tên' })
  fullName: string;

  @IsNotEmpty({ message: 'Chưa nhập tuổi' })
  age: string;
}
