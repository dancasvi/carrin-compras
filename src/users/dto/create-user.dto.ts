// src/users/dto/create-user.dto.ts
import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password!: string;

  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsEmail()
  @IsNotEmpty()
  email_address!: string; // Deve ser igual ao banco, não 'email'

  @IsString()
  @IsOptional()
  phone_number?: string;

  @IsString()
  @IsOptional()
  avatar_url?: string;

  @IsOptional()
  birth_date?: Date;
}