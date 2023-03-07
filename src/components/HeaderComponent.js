
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCats } from '../features/cats/catsSlice';



const HeaderComponent = () => {
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCats())
  }, [dispatch])  
  
  return (
    <header className='bg-sky-200 py-3 px-16'>
    <Link to='/' className='capitalize font-bold text-2xl ml-16 text-blue-600'>Cat clicker app</Link>      
  </header>
  )
}

export default HeaderComponent