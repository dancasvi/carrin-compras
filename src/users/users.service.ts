import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';
import { UserMapper } from './user.mapper';

@Injectable()
export class UsersService {
  constructor(private repository: UsersRepository) {}
  async create(createUserDto: CreateUserDto) {
    const newUser = await this.repository.create(createUserDto);
    return UserMapper.toEntity(newUser);
  }

  async findAll() {
    const users = await this.repository.getAll();
    return users.map(user => UserMapper.toEntity(user));
  }

  async findOne(id: number) {
    const user = await this.repository.getById(id);
    if (!user) throw new NotFoundException('User not found');
    // return user;
    return UserMapper.toEntity(user);
  }

  async findByUsername(username: string) {
    const user = await this.repository.getByUsername(username);
    if (!user) throw new NotFoundException('Username not found');
    return user
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
