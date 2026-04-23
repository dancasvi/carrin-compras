import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { MarketsModule } from './markets/markets.module';

@Module({
  imports: [
    PrismaModule, UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MarketsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
