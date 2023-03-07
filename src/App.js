import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';
import CenterComponent from './components/CenterComponent';
import ComponentBottom from './components/ComponentBottom';
import ComponentTop from './components/ComponentTop';
import ContainerCats from './components/ContainerCats';
import LeftComponent from './components/CatsNameLeft';
import RightComponent from './components/RightComponent';
import { fetchCats } from './features/cats/catsSlice';



const App = ()=> {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCats())
  }, [dispatch])  
  dispatch(fetchCats())
  return (
   < >
      <header className='bg-sky-200 py-3 px-16'>
        <h1 className='capitalize font-bold text-2xl ml-16 text-blue-600'>Cat clicker app</h1>      
      </header>
      <ComponentTop>
        <LeftComponent />
        <div className='flex'>
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
