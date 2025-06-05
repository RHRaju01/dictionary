import React, { useState } from "react";

function SearchBar({ onSearch, onClear }) {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(input.trim());
  };

  const handleClear = () => {
    setInput("");
    onClear();
  };

  return (
    <form className="search-bar-container" onSubmit={handleSearch}>
      <input
        type="text"
        className="search-input"
        placeholder="Search for a verb..."
        value={input}
        onChange={handleInputChange}
      />
      <div className="search-button-wrapper">
        <button type="submit" className="search-button">Search</button>
        <button type="button" className="clear-button" onClick={handleClear}>
          Clear
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
