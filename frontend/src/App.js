import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Signin from './Components/Signin'
import Home from './Components/Home'
import SigninCard from './Components/SigninCard'
import AllNews from './Components/AllNews'
import { Route } from 'react-router'
// import Particles from 'react-particles-js';

// SIGNIN MAKES HOME NORMAL

export default class App extends React.Component{

  

  render(){

    return(
      <div>
        <BrowserRouter> 
          <Route exact path='/sign-in' component={SigninCard}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/news' component={AllNews}/>

        </BrowserRouter>

        

      </div>
    )
  }
}
