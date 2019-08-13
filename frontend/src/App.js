import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Signin from './Components/Signin'
import Home from './Components/Home'
import SigninCard from './Components/SigninCard'
import { Route } from 'react-router'
// import Particles from 'react-particles-js';


export default class App extends React.Component{

  

  render(){

    return(
      <div>
        <BrowserRouter> 
          <Route exact path='/sign-in' component={SigninCard}/>
          <Route exact path='/home' component={Home}/>
         </BrowserRouter>

        {/* <Signin/> */}
        

      </div>
    )
  }
}
