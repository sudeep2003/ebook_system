// app/api/books/[id]/route.js

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req) {
  const { id } = req.params;
  const book = await prisma.book.findUnique({ where: { id: parseInt(id) } });

  if (!book) {
    return new Response("Book not found", { status: 404 });
  }

  return new Response(JSON.stringify(book), { status: 200 });
}

export async function PUT(req) {
  const { id } = req.params;
  const { title, author, price, description, genre, imageUrl } = await req.json();

  const updatedBook = await prisma.book.update({
    where: { id: parseInt(id) },
    data: { title, author, price, description, genre, imageUrl },
  });

  return new Response(JSON.stringify(updatedBook), { status: 200 });
}

export async function DELETE(req) {
  const { id } = req.params;

  await prisma.book.delete({
    where: { id: parseInt(id) },
  });

  return new Response("Book deleted", { status: 204 });
}
