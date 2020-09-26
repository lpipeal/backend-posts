import { Injectable, NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, EditUserDto } from './dtos';
import { User } from './entities';

@Injectable()
export class UserService {

    
constructor(
    @InjectRepository(User)
    private readonly userRepository:Repository<User>
){}

async getMany():Promise<User[]>{
    return await this.userRepository.find(); 
}

async getOne(id:number){
    const user= await this.userRepository.findOne(id);
    if(!user) throw new NotFoundException();
    return user; 
}

async createOne(dto:CreateUserDto){
    const user= await this.userRepository.create(dto);
    return await this.userRepository.save(user);
}

async editOne(id:number, dto:EditUserDto){
    const user = await this.userRepository.findOne(id);
    if(!user) throw new NotFoundException('Usuario no existe')
    const editedUser= Object.assign(user,dto);
    return await this.userRepository.save(editedUser);
}

async deleteOne(id:number){
  return await this.userRepository.delete(id);
}

}
