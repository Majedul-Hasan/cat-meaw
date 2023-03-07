import React from 'react';

import './App.css';
import CenterComponent from './components/CenterComponent';
import ComponentBottom from './components/ComponentBottom';
import ComponentTop from './components/ComponentTop';
import ContainerCats from './components/ContainerCats';
import LeftComponent from './components/CatsNameLeft';
import RightComponent from './components/RightComponent';
import HeaderComponent from './components/HeaderComponent';



const App = ()=> {

  return (
   < >    
   <HeaderComponent /> 
      <ComponentTop>
        <LeftComponent />
        <div className='flex flex-1'>
          <CenterComponent />
          <RightComponent />
        </div>       
      </ComponentTop>
      <ComponentBottom>
        <ContainerCats />
      </ComponentBottom>
   </>
  )
}







export default App;
