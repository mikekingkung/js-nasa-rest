//import React, { useState } from "react";
import { useStoreActions } from "easy-peasy";

const AddImages = () => {
  //const [images, setImages] = useState([]);

  const addNasaImages = useStoreActions(actions => actions.addImages);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addNasaImages();
        }}
      >
        <input type="submit" value="Add Images" />
      </form>
    </div>
  );
};

export default AddImages;
