import React, {Component, useState} from 'react';


//Import CSS
import './App.css';


//Import Components
import Content from './components/content';
import Header from './components/header';
import Increment from './pages/increment';


function App(){
  return(
    <div>
      <Header lalala="Convert Title By Props"
              lalala2="This 2 Props for Child"/>
      <Content />
      <Increment />
    </div>
  )
}

function GuestPages(){
  return(
    <div className="App-header">
      <h1>Please SignUp</h1>
    </div>
  )
}

function SwitcPages(){
  const [isLoggedin] = useState(true)
  return(
    <div>{isLoggedin ? <App /> : <GuestPages />}</div>
  )
}

// class GuestPages extends Component{
//   render(){
//     return(
//       <div className="App-header">
//         <h1>Please SignUp</h1>
//       </div>
//     )
//   }
// }

// class SwitcPages extends Component{
//   render() {
//     const isLoggedin = true;
//     if(isLoggedin){
//       return <App />
//     }else{
//       return <GuestPages />
//     }
//   }
// }

// class App extends Component {
//   render(){
//     return(
//       <div className="App">
//         <Header />
//         <Content />
//       </div>
//     )
//   }
// }

export default SwitcPages