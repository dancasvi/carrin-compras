import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// 1. Importe o filtro que você criou
import { PrismaExceptionFilter } from './common/filters/prisma-exception.filter'; 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 2. O filtro global (Rede de proteção para erros de banco)
  app.useGlobalFilters(new PrismaExceptionFilter());

  // 3. O pipe global (Validação dos dados que entram)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();