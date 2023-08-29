import React from "react";
import { GifObject } from "../types/giphy";

interface Props {
  gif: GifObject;
  onClose: () => void;
}

const LightBox: React.FC<Props> = ({ gif, onClose}) => {

  return(
    <div>

    <img src={gif.images.original.url}
     alt="" />
    <button onClick={onClose}> Close</button>
  </div>
  )
  
}

export default LightBox