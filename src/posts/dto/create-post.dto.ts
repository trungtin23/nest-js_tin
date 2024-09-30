import { IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  id: string;

  @IsNotEmpty({ message: 'Chưa nhập title' })
  title: string;
  @IsNotEmpty({ message: 'Chưa nhập content' })
  content: string;

  userId: string;
}
