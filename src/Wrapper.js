import React from 'react';
import Router from './router'
import Emails from './components/Emails';
import AddEmail from './components/AddEmail';

const Header = () => (
  <header >
    
    <h1 >Registration</h1>
  </header>);

const Wrapper = () => (
  <div >

    <Header/>
    <AddEmail/>
    <Emails/>
    
    
    
  </div>
);

export default Wrapper;