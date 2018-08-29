import React from 'react';
import Router from './router'
import Emails from './components/Emails';



const Header = () => (
  <header >
    
    <h1 >Registration</h1>
  </header>);

const Wrapper = () => (
  <div >

    <Header/>
   <Router/>
   <Emails/>
    
    
    
  </div>
);



export default Wrapper;