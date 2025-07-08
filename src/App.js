import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AdminPanel from "./pages/AdminPanel";
import EditBook from "./pages/EditBook";
import "./styles/App.css";


function App() {
  return (
    <div>
      <nav style={{ padding: "1rem", background: "#eee" }}>
        <Link to="/" style={{ marginRight: "20px" }}>Home</Link>
        <Link to="/admin">Admin Panel</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/edit/:id" element={<EditBook />} />
      </Routes>
    </div>
  );
}

export default App;
