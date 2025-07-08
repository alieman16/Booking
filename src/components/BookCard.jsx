import React from "react";

const BookCard = ({ book }) => (
 <div className="book-card">
  <h3>{book.title}</h3>
  <p><strong>Author:</strong> {book.author}</p>
  <p>{book.description}</p>
</div>
);

export default BookCard;
