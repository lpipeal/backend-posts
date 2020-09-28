import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { get } from 'http';
import { CreatePostDto, EditPostDto } from './dtos';
import { PostService } from './post.service';

@ApiTags('Posts')
@Controller('posts')
export class PostController {

  constructor(private readonly postService:PostService){}


    @Get()
    async getMany(){
     const data = await this.postService.getMany();   
      return {
        message:"Posts Cargados",
        data: data
      }
    
    }

    @Get(':id')  
    async getOne(@Param('id',ParseIntPipe) id: number){
      const data = await this.postService.getOne(id);
      return {
        message:"Post Cargado",
        data: data
      }
    }

    @Post()
    async createOne(@Body() dto:CreatePostDto){
      const data = await this.postService.createOne(dto);  
      return {
        message:"Post Creado",
        data: data
      }
    
    }

    @Put(':id')
    async editOne(@Param('id') id: number, @Body() dto:EditPostDto){
      const data = await this.postService.editOne(id,dto);  
      return {
        message:"Post Editado",
        data: data
      }
    
    }

    @Delete(':id')
    async deleteOne(@Param('id') id: number){
      const data= await this.postService.deleteOne(id);
      return {
          message:"Post Eliminado",
          data:data
      }

    }
}
