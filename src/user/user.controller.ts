import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto, EditUserDto } from './dtos';
import { UserService } from './user.service';

@ApiTags('Users')
@Controller('users')
export class UserController {

    constructor(private readonly userService:UserService){}

    @Get()
    async getMany(){
       const data= await this.userService.getMany();
       return {
           message:"Usuarios Cargados",
           data:data
       }
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id:number){
       const data= await this.userService.getOne(id);
       return {
           message:"Usuario Cargado",
           data:data
       }
    }

    @Post()
    async createOne(@Body()dto:CreateUserDto){
       const data= await this.userService.createOne(dto);
       return {
           message:"Usuario Creado",
           data:data
       }
    }

    @Put(':id')
    async editOne(@Param('id') id:number,@Body()dto:EditUserDto){
       const data= await this.userService.editOne(id,dto);
       return {
           message:"Usuario Editado",
           data:data
       }
    }

    @Delete(':id')
    async deleteOne(@Param('id') id:number){
        const data= await this.userService.deleteOne(id);
        return {
            message:"Usuario Eliminado",
            data:data
        }
    }

}
