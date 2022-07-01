import React from 'react';
// to use image must import
import logo from './logo.svg'
import './style.css'

function App() {

// a react component always must return JSX 
  return (
    <React.Fragment>
      <h1>hello world</h1>
      <p>Let there be light!</p>
      <img src ={logo}/>
      <img src ={require('./howl.jpg')}/>
    </React.Fragment>
    
  )
}

// a component is
// 1. a function
// 2. returns JSX
// 3.first alphabet is uppercase
// 4. can be used in JSX as if it was an HTML element
// first argument of a component function is all its props in an object 

export default App;