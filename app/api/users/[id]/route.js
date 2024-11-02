import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req) {
  const { id } = req.params;
  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
    select: { id: true, name: true, email: true, role: true, createdAt: true },
  });

  if (!user) {
    return new Response("User not found", { status: 404 });
  }

  return new Response(JSON.stringify(user), { status: 200 });
}

export async function PUT(req) {
  const { id } = req.params;
  const { role } = await req.json();

  const updatedUser = await prisma.user.update({
    where: { id: parseInt(id) },
    data: { role },
  });

  return new Response(JSON.stringify(updatedUser), { status: 200 });
}

export async function DELETE(req) {
  const { id } = req.params;

  await prisma.user.delete({
    where: { id: parseInt(id) },
  });

  return new Response("User deleted", { status: 204 });
}
