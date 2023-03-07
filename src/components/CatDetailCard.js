import React from 'react'
import { useDispatch } from 'react-redux'

import { patchClick, updateClick } from '../features/cats/catsSlice';



const CatDetailCard = ({cat}) => {
  const dispatch = useDispatch()
  
 const {name, click, image , id, desc} = cat || {}

 const clickHandler = () =>{
  dispatch(patchClick({id, click}))
  dispatch(updateClick(id))
 }


  return (

   <div className='mx-3 p-0 border-4 border-gray-400 w-3/12'>
    {
      Object.entries(cat).length !== 0 ? <>
       <div className='px-10 pt-4 pb-2 '>
      <h2 className='capitalize font-bold text-2xl'>{name}</h2>
      <p>No. of times clicked : {click}</p>
    </div>
    <div className='img-container p-1'>
      <img onClick={clickHandler} src={`${image}`} alt='tabby'/>
    </div>
    <div className='px-10 py-4'>
      <p>{desc}</p>
      <p>{
        click <= 5 ? 'Infant' : click >= 6 && click <= 12 ? 'Child' : click >= 13 && click <= 25 ? 'Young' : click >= 26 && click <= 40 ? 'Middle-Age': click >=41 && click <= 60 ? 'Old' : 'Very Old'}</p>
      
      
    </div>
      </> : <div className='mx-auto flex justify-center items-center h-full'>
        <p className='text-2xl font-bold capitalize text-orange-400'>please go to homepage an select a cat</p>
        
        </div>
    }
   

   </div>
  )
}

export default CatDetailCard