import React from 'react';
import './css/AweSomeHeader.css';

// function AweSomeHeader(props) {
//     //<header className="AweSomeHeader-header">Hello Header</header>
//     return (
//       <div>
//         <div>
//            <header>Hello Header {props.name}</header>
//         </div>
//       </div>
//     );
//   }


  class AweSomeHeader extends React.Component {
    //<header className="AweSomeHeader-header">Hello Header</header>
    constructor() {
      super()
      this.state ={count:0}
      this.handleClick = this.handleClick.bind(this)
    }


    handleClick(){
      this.setState(prevState => {
        return {count:prevState.count + 1}
      })
    }

    render(){
      return (
        <div>
          <div>
            <header>Hello Header {this.props.name} {this.state.answer} {this.props.chars}</header>
            <h1>{this.state.count}</h1>
            <button onClick={this.handleClick}>Click Me</button>
           
            {/**include comments like this {} used to include javascript in JSX
             *  We could also render a ChildComponent,passing in the this.state.count, If react sees this, it will pass the value to
             *  the child component and re-render any components in the hierarchy that are related. 
             *  <ChildComponent count={this.state.count}/>
             */

            }

          </div>
        </div>
    );
   }
  }

  export default AweSomeHeader;

