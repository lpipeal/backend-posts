import { Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Post } from './entities';
import { PostController } from './post.controller';
import { PostService } from './post.service';

const entityPost = TypeOrmModule.forFeature([Post]);

@Module({
  // imports: [TypeOrmModule.forFeature([Post])]
  imports: [entityPost],
  controllers: [PostController],
  providers: [PostService]
})
export class PostModule {}
