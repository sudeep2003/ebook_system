// app/api/auth/login.js

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(req, res) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || user.password !== password) {
    return new Response("Invalid credentials", { status: 401 });
  }

  return new Response(JSON.stringify(user), { status: 200 });
}
