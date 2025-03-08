import { PrismaClient } from '@prisma/client';

declare global {
   var prisma: PrismaClient | undefined;
}

// Use a singleton pattern to prevent multiple instances in development
export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

export default prisma;
