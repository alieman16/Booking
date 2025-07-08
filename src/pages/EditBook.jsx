import React, { useEffect, useState } from "react";
import { getBookById, updateBook } from "../utils/bookService";
import { useParams, useNavigate } from "react-router-dom";

const EditBook = () => {
  const { id } = useParams();
  const [form, setForm] = useState({ title: "", author: "", description: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const book = getBookById(id);
    if (book) setForm(book);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBook(form);
    navigate("/admin");
  };

  return (
    <div className="container">
      <h2>✏️ Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <input
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
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
};

export default EditBook;
