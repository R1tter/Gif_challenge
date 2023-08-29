import React, { useState } from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm';

import { GiphySearchResponse, GifObject } from './types/giphy';
import GifGrid from './components/Gifgrid';
import LightBox from './components/LightBox';

const API_ENDPOINT = "https://api.giphy.com/v1/gifs/search";
const API_KEY = "pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa";

const App: React.FC = () => {
  const [gifs, setGifs] = useState<GifObject[]>([]);
  const [selectedGif, setSelectedGif] = useState<GifObject | null>(null);

  const searchGifs = async (query: string) => {
    try {
      const response = await axios.get<GiphySearchResponse>(API_ENDPOINT, {
        params: {
          api_key: API_KEY,
          q: query,
          limit: 25 // Adjust this limit as needed for performance
        }
      });
      setGifs(response.data.data);
    } catch (error) {
      console.error('Failed to fetch gifs', error);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <SearchForm onSearch={searchGifs} />
      <div className="container mx-auto p-4">
        <GifGrid gifs={gifs} onSelect={gif => setSelectedGif(gif)} />

        {selectedGif && (
          <LightBox gif={selectedGif} onClose={() => setSelectedGif(null)} />
        )}
      </div>
    </div>
  );
};

export default App;
