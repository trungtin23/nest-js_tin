import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Posts } from 'src/posts/entities/post.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  userName: string;

  @Column()
  password: string;

  @Column()
  fullName: string;

  @Column()
  age: string;

  @OneToMany(() => Posts, (post) => post.user)
  posts: Posts[];
}
