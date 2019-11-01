import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const SearchBar = ({ searchTerm, setSearchTerm, searchInQuestions }) => {
  return (
    <div className="search-bar">
      <Typography variant="h4">Questions and Answers:</Typography>
      <input
        className="qa-search-bar"
        name="search"
        placeholder="Have a Question?"
        value={searchTerm}
        onChange={event => {
          setSearchTerm(event.target.value);
        }}
      ></input>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => {
          searchInQuestions(searchTerm);
        }}
      >
        SEARCH
      </Button>
    </div>
  );
};

export default SearchBar;
