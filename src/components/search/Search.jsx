import React from "react";
import "./style.scss";
import { FaSearch } from "react-icons/fa";

const Search = ({ value, handleChange }) => {
  return (
    <div className="search-input">
      <span className="icon">
        <FaSearch />
      </span>
      <input
        value={value}
        onChange={handleChange}
        type="text"
        placeholder="Filter locations by name, email"
      />
    </div>
  );
};

export default Search;
