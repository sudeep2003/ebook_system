import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
    },
  });
  return new Response(JSON.stringify(users), { status: 200 });
}
