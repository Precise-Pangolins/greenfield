import React, { useState, useEffect } from "react";

const SearchBar = ({ searchTerm, setSearchTerm, searchInQuestions }) => {
  return (
    <div>
      <input
        name="search"
        placeholder="Have a Question?"
        value={searchTerm}
        onChange={event => {
          setSearchTerm(event.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          searchInQuestions(searchTerm);
        }}
      >
        SEARCH
      </button>
    </div>
  );
};

export default SearchBar;
