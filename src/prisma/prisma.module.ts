import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Essencial para o Service de Users conseguir usar o Prisma
})
export class PrismaModule {}