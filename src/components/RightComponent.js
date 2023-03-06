import React from 'react'
import { Link } from 'react-router-dom'

const RightComponent = () => {
  return (
    <div className='mx-3'>
    <div>
      <h2 className='capitalize'> tabby</h2>
      <p>No. of times clicked : 5</p>
    </div>
    <div className='img-container'>
      <img src='https://plus.unsplash.com/premium_photo-1661508614319-b5e40d1143bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='tabby'/>

    </div>
    <div>
      <p>tabby tabby tabby tabby</p>
      <p>grown up baby</p>
      <Link to={`/`}> Card Link</Link>
      
    </div>

   </div>
  )
}

export default RightComponent