import React from 'react';
import logo from '../images/laptop.jpg';
import { AppForm } from './AppForm';

export const Header = ({addNewJob}) => {
  return ( 
                                                                     
      <header className='head-top'>
          <img src={logo} alt="header banner" className='logo' height='100px'/>
          <a href="./">Home</a>
         <AppForm addNewJob={addNewJob}/>

      </header>
       
  );
};
