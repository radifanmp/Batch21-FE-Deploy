import React, {Component} from 'react';

import '../App.css';

function Header(props){
    return(
        <div className="App">
            <h1>{props.lalala}</h1>
            <h1>{props.lalala2}</h1>
        </div>
    )
}

// class Header extends Component{
//   render(){
//     return(
//       <div className="App">
//         <h1>{this.props.lalala}</h1>
//       </div>
//     )
//   }
// }

export default Header