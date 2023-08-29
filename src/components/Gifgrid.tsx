import React from 'react';
import { GifObject } from '../types/giphy';

interface Props {
  gifs: GifObject[];
  onSelect: (gif: GifObject) => void;
}

const GifGrid: React.FC<Props> = ({ gifs, onSelect }) => (
  <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="grid grid-cols-3 gap-4"> 
      {gifs.map(gif => (
        <div key={gif.id} className="transition-shadow hover:shadow-md rounded">
          <img 
            src={gif.images.original.url} 
            alt="" 
            onClick={() => onSelect(gif)} 
            className="cursor-pointer w-full h-48 object-cover rounded" 
          />
        </div>
      ))}
    </div>
  </div>
);

export default GifGrid;
