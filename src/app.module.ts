import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { createConnections } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';

const connection = TypeOrmModule.forRoot({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "myblog_user",
  password: "z,U/dg?xcZG3]UN",
  database: "myblog_db",
  entities: [__dirname + "./**/**/*entity{.ts,.js}"],
  autoLoadEntities:true,
  synchronize: true
});


@Module({
  imports: [connection,
    PostModule,
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {


}
