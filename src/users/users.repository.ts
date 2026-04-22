import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { users } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  async getById(id: number): Promise<users | null> {
    return this.prisma.users.findUnique({
      where: { id },
    });
  }

  async getByUsername(username: string): Promise<users | null> {
    return this.prisma.users.findUnique({
      where: { username },
    });
  }

  async getAll(): Promise<users[]> {
    const data = await this.prisma.users.findMany();
    return data;
  }

  async create(data: CreateUserDto): Promise<users> {
    return this.prisma.users.create({ data });
  }

  async remove(id: number): Promise<users> {
    return this.prisma.users.delete({
      where: { id },
    });
  }
  
  async update(id: number, data: UpdateUserDto): Promise<users> {
    return this.prisma.users.update({
      where: { id },
      data: data,
    });
  }

  // Aqui você pode adicionar métodos complexos de banco futuramente
}