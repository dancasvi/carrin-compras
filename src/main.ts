import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove campos que não estão no DTO
      forbidNonWhitelisted: true, // Retorna erro se enviarem campos extras
      transform: true, // Converte tipos (ex: string para Date)
    }),
  );

  await app.listen(3000);
}
bootstrap();