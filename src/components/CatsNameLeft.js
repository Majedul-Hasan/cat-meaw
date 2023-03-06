import React from 'react'
import { useSelector } from 'react-redux'
import CatsNameLeft from './CatsNmaeLeft'


const LeftComponent = () => {
  const {cats} =  useSelector(state => state?.cats)

  return (
   <>
   <div className=' w-3/12 '>
    {
    cats.map(cat =><CatsNameLeft cat = {cat} />)
    }
        
        
        

     
        
   </div>
   
   </>
  )
}

export default LeftComponent