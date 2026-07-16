import { PrismaClient } from "@/app/generated/prisma/client"; // import prisma client yang prisma generate
import { PrismaPg } from "@prisma/adapter-pg"; // kita import satu driver untuk ia berkomunikasi dengan postgresSQL

const connectionString = process.env.DATABASE_URL; //kita buat connection 

//check ada tak connection tu, kalo tak ada connection ia akan display seperti dibawah
if (!connectionString) {
  throw new Error("DATABASE_URL tidak dijumpai dalam file .env");
}

//bina postgresSQL adapter menggunakan connection string 
const adapter = new PrismaPg({
  connectionString,
});

//globalThis => ialah object global dalam Node.js
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// dekat operator "??"" bermaksud if ada nilai disebelah kiri then guna nilai tu then if takde nilai, ia akan create nilai baru guna sebelah kanan
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({adapter,});

  //digunakan untuk development mode
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}