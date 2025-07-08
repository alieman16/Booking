import { v4 as uuidv4 } from "uuid";

const STORAGE_KEY = "bookData";

export function getBooks() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function addBook(book) {
  const books = getBooks();
  const newBook = { ...book, id: uuidv4() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...books, newBook]));
}

export function updateBook(updatedBook) {
  const books = getBooks().map((book) =>
    book.id === updatedBook.id ? updatedBook : book
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
}

export function deleteBook(id) {
  const books = getBooks().filter((book) => book.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
}

export function getBookById(id) {
  return getBooks().find((book) => book.id === id);
}
