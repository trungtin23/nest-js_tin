// eslint-disable-next-line prettier/prettier
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Users } from 'src/users/entities/user.entity';

@Entity()
export class Posts {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;
  @Column()
  userId: string;

  @ManyToOne(() => Users)
  @JoinColumn()
  user: Users;
}
