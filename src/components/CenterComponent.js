// import React from 'react'
// import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const CenterComponent = () => {
//  const cat =  useSelector(state => state.cats) || {}
//  console.log(cat);
  return (
   <div className='mx-3 p-0 border-4 border-gray-400'>
    <div className='px-10 pt-4 pb-2'>
      <h2 className='capitalize font-bold text-2xl'>tabby</h2>
      <p>No. of times clicked : 5</p>
    </div>
    <div className='img-container p-1'>
      <img src='https://plus.unsplash.com/premium_photo-1661508614319-b5e40d1143bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='tabby'/>

    </div>
    <div className='px-10 py-4'>
      <p>tabby tabby tabby tabby</p>
      <p>grown up baby</p>
      <Link to={`/`}> Card Link</Link>
      
    </div>

   </div>
  )
}

export default CenterComponent