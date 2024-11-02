// app/books/page.js
"use client"
import { useEffect, useState } from "react";

export default function BookCatalog() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      const res = await fetch("/api/books");
      const data = await res.json();
      setBooks(data);
    }
    fetchBooks();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {books.map((book) => (
        <div key={book.id} className="border p-4 rounded-md shadow-md">
          <img src={book.imageUrl} alt={book.title} className="h-48 w-full object-cover mb-4" />
          <h3 className="text-lg font-semibold">{book.title}</h3>
          <p className="text-gray-600">{book.author}</p>
          <p>${book.price}</p>
        </div>
      ))}
    </div>
  );
}
