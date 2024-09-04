import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Users } from './users/user.entity/user.entity';
import { PostsModule } from './posts/posts.module';
@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    UsersModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: 'root',
      password: process.env.DB_PASSWORD,
      database: 'dbnodejs',
      entities: [Users],
    }),
    PostsModule,
  ],
})
export class AppModule {}
