// app/api/auth/register.js

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(req, res) {
  const { name, email, password } = await req.json();

  // Basic example; remember to hash passwords for security in production
  const user = await prisma.user.create({
    data: { name, email, password },
  });

  return new Response(JSON.stringify(user), { status: 201 });
}
