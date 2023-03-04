import React from 'react';

import './App.css';
import CenterComponent from './components/CenterComponent';
import ComponentBottom from './components/ComponentBottom';
import ComponentTop from './components/ComponentTop';
import ContainerCats from './components/ContainerCats';
import LeftComponent from './components/LeftComponent';
import RightComponent from './components/RightComponent';



const App = ()=> {
  return (
   < >
      <header className='bg-sky-200 py-3 px-16'>
        <h1 className='capitalize font-bold text-2xl ml-16 text-blue-600'>Cat clicker app</h1>      
      </header>
      <ComponentTop>
        <LeftComponent />
        <CenterComponent />
        <RightComponent />
      </ComponentTop>
      <ComponentBottom>
        <ContainerCats />
      </ComponentBottom>


   </>
  )
}

export default App;
