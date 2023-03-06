// import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { patchClick,  editActive, updateClick } from '../features/cats/catsSlice';



const CenterComponent = () => {
  const dispatch = useDispatch()
 const {cat} =  useSelector(state => state.cats) || {}
 const {name, click, image , id} = cat

 const clickHandler = () =>{
  dispatch(patchClick({id, click}))
  // dispatch(fetchCats())
  dispatch(updateClick(id))
 }
  return (
   <div className='mx-3 p-0 border-4 border-gray-400'>
    <div className='px-10 pt-4 pb-2'>
      <h2 className='capitalize font-bold text-2xl'>{name}</h2>
      <p>No. of times clicked : {click}</p>
    </div>
    <div className='img-container p-1'>
      <img onClick={clickHandler} src={`${image}`} alt='tabby'/>

    </div>
    <div className='px-10 py-4'>
      <p>{name}</p>
      <p>{
        click <= 5 ? 'Infant' : click >= 6 && click <= 12 ? 'Child' : click >= 13 && click <= 25 ? 'Young' : click >= 26 && click <= 40 ? 'Middle-Age': click >=41 && click <= 60 ? 'Old' : 'Very Old'}</p>
      <button  onClick={()=>dispatch(editActive(cat))}> Card Link</button>
      
    </div>

   </div>
  )
}

export default CenterComponent