import { Module } from '@nestjs/common';
import { MarketsService } from './markets.service';
import { MarketsController } from './markets.controller';
import { MarketsRepository } from './markets.repository';
import { PrismaModule } from 'src/prisma/prisma.module';


@Module({
  controllers: [MarketsController],
  providers: [MarketsService, MarketsRepository],
  imports: [PrismaModule]
})
export class MarketsModule {}
