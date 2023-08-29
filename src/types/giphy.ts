export interface GifObject {
  id: string;
  images: {
    original: {
      url: string;
    };
  };
}

export interface GiphySearchResponse {
  data : GifObject[];
}
