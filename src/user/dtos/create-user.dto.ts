import { IsBoolean, IsDate, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @MaxLength(15)
    identificationType:string;
    
    @IsString()
    @MaxLength(15)
    identificationNumber:string;
    
    @MaxLength(20)
    @IsString()
    name:string;
    
    @IsString()
    lastName:string;
    
    @IsString()
    @IsNotEmpty()
    email:string;

    @IsString()
    birthDate:Date;
    
    @IsString()
    @MaxLength(16)
    @MinLength(8)
    password:string;
    
    @IsOptional()
    @IsBoolean()
    status:boolean;
}
