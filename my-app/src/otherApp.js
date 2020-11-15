import React from 'react';

import AweSomeHeader from "./awesomeheader.js";
import AweSomeFooter from "./awesomefooter.js";
import MainContent from './main';
import './css/OtherApp.css';




// function OtherApp() {
//     return (
//       <div>
//         <div>
//           <AweSomeHeader />
//         </div>
//         <div>
//           <MainContent />
//         </div>
//         <div>
//           <AweSomeFooter />
//         </div>
//       </div>
//     );
//   }

  class OtherApp extends React.Component {
    render() {
      const characterNames = [
                     {name:' harry',
                     job: 'teaboy'}
                 ]
      return (
        <div>
        <div>
          <AweSomeHeader name="mike" chars={characterNames[0].name}/>
        </div>
        <div>
          <MainContent />
        </div>
        <div>
          <AweSomeFooter />
        </div>
      </div>
      )
    }
  }
  

  export default OtherApp;

  