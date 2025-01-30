import React, { useState, useEffect } from 'react';

// Debounce function
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const Search = () => {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  // Update debounced query with delay
  const handleSearch = debounce((value) => {
    setDebouncedQuery(value);
  }, 500); // Delay of 500ms

  // Update query on user input and call debounce function
  const handleChange = (e) => {
    setQuery(e.target.value);
    handleSearch(e.target.value); // Debounced search
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://img.pikbest.com/backgrounds/20220119/red-and-blue-gradient-light-effect-simple-theme-background_6241508.jpg!bw700')" }}>
      <div className="w-full p-8 bg-white bg-opacity-70 shadow-xl rounded-xl max-w-lg w-full">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Debounced Search</h2>
        <input
          type="text"
          className="w-full p-4 mb-4 border border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
          placeholder="Search..."
          value={query}
          onChange={handleChange}
        />
        <div className="mt-4">
          <h3 className="text-2xl font-semibold text-gray-800">Debounced Query:</h3>
          <p className="text-lg text-gray-600">{debouncedQuery}</p>
        </div>
      </div>
    </div>
  );
};

export default Search;
