// src/users/dto/create-user.dto.ts
import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'O nome de usuário deve ser um texto.' })
  @IsNotEmpty({ message: 'O nome de usuário deve ser preenchido.' })
  username!: string;

  @IsString({ message: 'A senha deve ser texto.' })
  @IsNotEmpty({ message: 'A senha deve ser preenchida.' })
  @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres.' })
  password!: string;

  @IsString({ message: 'O nome deve ser um texto.' })
  @IsNotEmpty({ message: 'O nome deve ser preenchido.' })
  name!: string;

  @IsEmail({}, { message: 'O formato do e-mail informado é inválido.' })
  @IsNotEmpty({ message: 'O email deve ser preenchido.' })
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