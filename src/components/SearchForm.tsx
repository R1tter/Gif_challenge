import React, { useState } from 'react';

interface Props {
  onSearch: (query: string) => void;
}

const SearchForm: React.FC<Props> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="bg-gray-200 shadow-md p-4">
      <div className="container mx-auto">
        <form onSubmit={handleSubmit} className="flex justify-center">
          <input
            type='text'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search for gifs...'
            className="p-2 w-64 rounded-l border-r border-gray-300 focus:outline-none focus:border-indigo-500"
          />
          <button 
            type='submit'
            className="p-2 bg-indigo-500 text-white rounded-r hover:bg-indigo-600 active:bg-indigo-700 focus:outline-none">
            Search
          </button>
        </form>
      </div>
    </div>
  )
}

export default SearchForm;
