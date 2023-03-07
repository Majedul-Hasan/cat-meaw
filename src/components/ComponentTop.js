import React from 'react'

const componentTop = ({children}) => {
  return (
    <div className='bg-sky-200 flex gap-5 justify-between '>
    {children}
   </div>
  )
}

export default componentTop