// app/api/books/route.js

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
  const books = await prisma.book.findMany();
  return new Response(JSON.stringify(books), { status: 200 });
}

export async function POST(req) {
  const { title, author, price, description, genre, imageUrl } = await req.json();

  const newBook = await prisma.book.create({
    data: { title, author, price, description, genre, imageUrl },
  });

  return new Response(JSON.stringify(newBook), { status: 201 });
}
