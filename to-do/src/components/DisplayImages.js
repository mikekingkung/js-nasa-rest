import React, { Fragment, useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";


const DisplayImages = () => {

 const images = useStoreState(state => state.images);
 const fetchImages = useStoreActions(actions => actions.fetchImages);

  useEffect(() => {
      fetchImages();
   //eslint-disable-next-line
  }, []);

  //console.log(images);

  // axios.get('http://localhost:8080/getimages')
  // .then(response => {
  //  const images = response;
  //  console.log(images);
  // })
  // .catch(error => {
  //  console.log(error);
  // })
  

  return (
      <>
          <h1>Images</h1>
          <p>Click todo item to toggle completed</p>
          <hr />
          {images && images.length > 0 && true &&
          <>
            {images.map(data => (
              <div className = "resource">
                {data.image ? <img src={data.image.url} alt="image" width="700" height="600" key={data.image.id}></img> : <br/> }
                {data.video ? <video src={data.video.url} controls autoplay> </video> : <br/> }
                {data.image ? <p>{data.image.title}</p> : <br/> }
                {data.image ? <p>{data.image.description}</p> : <br/>}
                {data.video ? <p>{data.video.title}</p> : <br/> }
                {data.video ? <p>{data.video.description}</p> : <br/>}
                <hr/>
              </div>
            ))}
          </>
        }
        </>
  );
};

export default DisplayImages;
