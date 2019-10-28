import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBar = ({
  searchTerm,
  setSearchTerm,
  searchInQuestions,
  getFilteredAns
}) => {
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
