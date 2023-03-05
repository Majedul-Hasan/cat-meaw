import React from 'react'

const CatsNameLeft = ({cat}) => {
    const {name, click } = cat
  return (
    <div className='flex bg-blue-200 justify-between px-4 border-y-2 py-2'>
    <h3 className='font-bold text-blue-700 text-xl'>{name }</h3>
    <p className='bg-gray-500 text-gray-300 font-semibold p-2 rounded-full w-10 h-10 flex items-center justify-center '>{click}</p>
</div>
  )
}

export default CatsNameLeft