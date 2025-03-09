import EmailProvider from 'next-auth/providers/email';
import { NextAuthOptions } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import db from './db';

const authOptions: NextAuthOptions = {
   adapter: PrismaAdapter(db),
   providers: [
      EmailProvider({
         server: {
            host: process.env.EMAIL_SERVER_HOST,
            port: parseInt(process.env.EMAIL_SERVER_PORT as string, 10),
            auth: {
               user: process.env.EMAIL_SERVER_USER,
               pass: process.env.EMAIL_SERVER_PASSWORD,
            },
         },
         from: process.env.EMAIL_FROM,
      }),
   ],
};

export default authOptions;
