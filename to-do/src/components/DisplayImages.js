import React, { Fragment, useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import axios from 'axios'


const DisplayImages = () => {
  //const images = useStoreState(state => state.images);
  
  const images = useStoreState(state => state.images);
  const fetchImages = useStoreActions(actions => actions.fetchImages);

  useEffect(() => {
    fetchImages();
   //eslint-disable-next-line
  }, []);

  //axios.get('http://localhost:8080/getimages')
  //.then(response => {
  //  const data = response.image;
  //  console.log(data);
  //  //this.setState({ data })
  //})
  //.catch(error => {
  //  console.log(error);
  //})
  
  /*
  let images = [{"image": {"id":"1","url": "https://images-assets.nasa.gov/video/Ultimate Saturn V Launch w Enhanced Sound/Ultimate Saturn V Launch w Enhanced Sound~thumb.jpg"}},
                {"image": {"id":"2","url": "https://images-assets.nasa.gov/video/Ultimate Saturn V Launch w Enhanced Sound/Ultimate Saturn V Launch w Enhanced Sound.srt"}},
                {"image": {"id":"3","url": "https://images-assets.nasa.gov/image/MAF_19671005-HAssembly/MAF_19671005-HAssembly~thumb.jpg"}},
                {"image": {"id":"4","url": "https://images-assets.nasa.gov/image/MAF_19671005_ViewtoWest/MAF_19671005_ViewtoWest~thumb.jpg"}},
                {"image": {"id":"5","url": "https://images-assets.nasa.gov/image/KSC-20190716-PH_FWM04_0104/KSC-20190716-PH_FWM04_0104~thumb.jpg"}},
                {"image": {"id":"6","url": "https://images-assets.nasa.gov/video/KSC-1960s-MH-NAS01-0001-Apollo_Saturn_V_Crawler,_VAB_Pad_Film_To_Tape/KSC-1960s-MH-NAS01-0001-Apollo_Saturn_V_Crawler,_VAB_Pad_Film_To_Tape~thumb.jpg"}},
                {"image": {"id":"7","url": "https://images-assets.nasa.gov/video/KSC-1960s-MH-NAS01-0001-Apollo_Saturn_V_Crawler,_VAB_Pad_Film_To_Tape/KSC-1960s-MH-NAS01-0001-Apollo_Saturn_V_Crawler,_VAB_Pad_Film_To_Tape.vtt"}},
                {"image": {"id":"8","url": "https://images-assets.nasa.gov/image/KSC-2014-1502/KSC-2014-1502~thumb.jpg"}},
                {"image": {"id":"9","url": "https://images-assets.nasa.gov/image/KSC-2014-1503/KSC-2014-1503~thumb.jpg"}},
                {"image": {"id":"10","url": "https://images-assets.nasa.gov/image/KSC-20170124-PH_KLS01_0024/KSC-20170124-PH_KLS01_0024~thumb.jpg"}},
                {"image": {"id":"11","url": "https://images-assets.nasa.gov/image/KSC-20170124-PH_KLS01_0043/KSC-20170124-PH_KLS01_0043~thumb.jpg"}}]
*/

  return (
    <Fragment>
      <h1>Images</h1>
      <p>Click todo item to toggle completed</p>
      <hr />
        {images.map(data => (
          <img src={data.image.url} alt="image" width="700" height="600" key={data.image.id}></img> 
        ))}
    </Fragment>
  );
};

export default DisplayImages;
