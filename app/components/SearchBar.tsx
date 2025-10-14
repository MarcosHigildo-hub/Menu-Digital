"use client";
import { Search } from "lucide-react";
import React from "react";
import { useState } from "react";

function SearchBar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const toggleSearch = () => {
    if (open && query) {
      console.log("pesquisar:", query);
      setQuery("");
    }
    setOpen(!open);
  };

  return (
    <div className="flex items-center space-x-2 overflow-hidden">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Pesquisar..."
        className={`transition-all duration-300 ease-in-out border rounded-full px-2 py-1
      ${open ? "w-40 opacity-100" : "w-0 opacity-0"}`}
      />
      <button
        onClick={toggleSearch}
      >
        <Search size={30} />
      </button>
    </div>
  );
}

export default SearchBar;
