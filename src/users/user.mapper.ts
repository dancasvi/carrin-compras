import { users } from '@prisma/client';
import { UserEntity } from './entities/user.entity';

export class UserMapper {
  static toEntity(prismaUser: users): UserEntity {
    return {
      id: prismaUser.id,
      username: prismaUser.username,
      name: prismaUser.name,
      email: prismaUser.email_address, // Tradução de nome de campo
      phone: prismaUser.phone_number,
      isActive: prismaUser.is_active,
      createdAt: prismaUser.created_at,
      // Note que NÃO incluímos o campo password aqui
    };
  }
}