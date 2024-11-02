import { useEffect, useState } from "react";

export default function ManageBooks() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: "", author: "", price: "", description: "", genre: "", imageUrl: "" });

  useEffect(() => {
    async function fetchBooks() {
      const res = await fetch("/api/books");
      const data = await res.json();
      setBooks(data);
    }
    fetchBooks();
  }, []);

  const handleInputChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const addBook = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBook),
    });
    if (res.ok) {
      const addedBook = await res.json();
      setBooks([...books, addedBook]);
      setNewBook({ title: "", author: "", price: "", description: "", genre: "", imageUrl: "" });
    }
  };

  const deleteBook = async (id) => {
    const res = await fetch(`/api/books/${id}`, { method: "DELETE" });
    if (res.ok) {
      setBooks(books.filter((book) => book.id !== id));
    }
  };

  return (
    <div>
      <h2>Manage Books</h2>
      <form onSubmit={addBook}>
        <input name="title" placeholder="Title" value={newBook.title} onChange={handleInputChange} required />
        <input name="author" placeholder="Author" value={newBook.author} onChange={handleInputChange} required />
        <input name="price" placeholder="Price" value={newBook.price} onChange={handleInputChange} required />
        <textarea name="description" placeholder="Description" value={newBook.description} onChange={handleInputChange} required />
        <input name="genre" placeholder="Genre" value={newBook.genre} onChange={handleInputChange} required />
        <input name="imageUrl" placeholder="Image URL" value={newBook.imageUrl} onChange={handleInputChange} required />
        <button type="submit">Add Book</button>
      </form>

      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} - {book.author} - ${book.price}
            <button onClick={() => deleteBook(book.id)}>Delete</button>
            <button>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
