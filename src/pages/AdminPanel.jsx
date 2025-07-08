import React, { useState, useEffect } from "react";
import { addBook, getBooks, deleteBook } from "../utils/bookService";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({ title: "", author: "", description: "" });
  const navigate = useNavigate();

  useEffect(() => {
    setBooks(getBooks());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(form);
    setBooks(getBooks());
    setForm({ title: "", author: "", description: "" });
  };

  const handleDelete = (id) => {
    deleteBook(id);
    setBooks(getBooks());
  };

  return (
    <div className="container">
      <h2>🛠 Admin Panel</h2>

      {/* Book Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={form.author}
          onChange={(e) => setForm({ ...form, author: e.target.value })}
          required
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        />
        <button type="submit">Add Book</button>
      </form>

      <hr style={{ margin: "2rem 0" }} />

      {/* Book List */}
      {books.length === 0 ? (
        <p>No books added yet.</p>
      ) : (
        books.map((book) => (
          <div key={book.id} className="book-card">
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p>{book.description}</p> 

            <div className="admin-actions">
              <button
                className="edit-btn"
                onClick={() => navigate(`/edit/${book.id}`)}
              >
                Edit
              </button>
              <button onClick={() => handleDelete(book.id)}>Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminPanel;
