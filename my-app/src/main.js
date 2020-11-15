import React from 'react';
import space from './space1.jpg';

function myFunction(){
  console.log("I was Clicked")
}

function MainContent() {
    return (
        <div id="MainContent">
          <header>
            <img src={space} alt="space" />
            <p>
              Hello Mike
            </p>
            <button onClick={myFunction}>Click Me</button>
          </header>
        </div>
    );
  }



  export default MainContent;