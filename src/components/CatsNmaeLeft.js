import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchCat, fetchCats } from '../features/cats/catsSlice'

const CatsNameLeft = ({cat}) => {


  const dispatch = useDispatch()
    const {name, click: age, id } = cat
    const clickHandler = () =>{
      dispatch(fetchCat(id))
      dispatch(fetchCats())
    }

  return (
    <div onClick={clickHandler} className='flex bg-blue-200 justify-between px-4 border-y-2 py-2 cursor-pointer'>
    <h3 className='font-bold text-blue-700 text-xl'>{name }</h3>
    <p className='bg-gray-500 text-gray-300 font-semibold p-2 rounded-full w-10 h-10 flex items-center justify-center '>{age}</p>
</div>
  )
}

export default CatsNameLeft