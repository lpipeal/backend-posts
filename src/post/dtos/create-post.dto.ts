import { IsArray, isArray, IsBoolean, IsEnum, IsString } from "class-validator";
import { PostCategory } from "../enums";
import { EnumToString } from "src/helpers/enumToString";

export class CreatePostDto{
    @IsString()
    title:string;
    
    @IsString()  
    slug:string;
    
    @IsString()
    excerpt:string;
    
    @IsString()
    content:string;
    
    @IsEnum(PostCategory,{
        message: `Opción Invalida. Las opciones correctas son ${EnumToString(PostCategory)}`
    })
    @IsString()
    category:PostCategory;
    
    @IsArray()
    @IsString({each:true})
    tags:string[];
    
    @IsBoolean()
    status  :boolean;
}