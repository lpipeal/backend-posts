import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { createConnections } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';

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
    PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

  // const connections = await createConnections([{
  //   name: "db1Connection",
  //   type: "mysql",
  //   host: "localhost",
  //   port: 3306,
  //   username: "root",
  //   password: "admin",
  //   database: "db1",
  //   entities: [__dirname + "/entity/*{.js,.ts}"],
  //   synchronize: true
  // }, {
  //   name: "db2Connection",
  //   type: "mysql",
  //   host: "localhost",
  //   port: 3306,
  //   username: "root",
  //   password: "admin",
  //   database: "db2",
  //   entities: [__dirname + "/entity/*{.js,.ts}"],
  //   synchronize: true
  // }]);



    // forRoot({imports: []}){

    // }

    // forFeature(){

    // }

}
