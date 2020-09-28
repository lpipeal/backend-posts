import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities';
import { UserController } from './user.controller';
import { UserService } from './user.service';

const entityUser = TypeOrmModule.forFeature([User]);

@Module({
  imports:[entityUser],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
