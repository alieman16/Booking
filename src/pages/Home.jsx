import React, { useEffect, useState } from "react";
import { getBooks } from "../utils/bookService";
import BookCard from "../components/BookCard";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(getBooks());
  }, []);

  return (
  <div className="container">
  <h2>Book Review Website</h2>
  {books.length === 0 ? (
    <p>No books yet. Please add from Admin Panel.</p>
  ) : (
    books.map((book) => <BookCard key={book.id} book={book} />)
  )}
</div>
  );
};

export default Home;
