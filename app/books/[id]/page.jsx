// app/books/[id]/page.js
"use client"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function BookDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState(null);

  useEffect(() => {
    if (id) {
      async function fetchBook() {
        const res = await fetch(`/api/books/${id}`);
        const data = await res.json();
        setBook(data);
      }
      fetchBook();
    }
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <img src={book.imageUrl} alt={book.title} className="h-64 w-full object-cover mb-4" />
      <h2 className="text-2xl font-semibold">{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p className="mt-4">{book.description}</p>
      <p className="text-xl mt-4">${book.price}</p>
    </div>
  );
}
