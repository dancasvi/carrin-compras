import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

async function main() {
  console.log('DATABASE_URL:', process.env.DATABASE_URL);
  
  const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL as string,
    ssl: { rejectUnauthorized: false },
  });

  const prisma = new PrismaClient({ adapter });

  try {
    const users = await prisma.users.findMany();
    console.log('SUCESSO:', users);
  } catch (err) {
    console.error('ERRO:', err);
  } finally {
    await prisma.$disconnect();
  }
}

main();