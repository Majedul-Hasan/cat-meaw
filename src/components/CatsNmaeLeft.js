import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCat} from '../features/cats/catsSlice'

const CatsNameLeft = ({cat}) => {
  const dispatch = useDispatch()
    const {name, click: age, id } = cat
    const clickHandler = () =>{
      dispatch(fetchCat(id))
      // dispatch(fetchCats())
    }

    const {cat: selectedCat} = useSelector(state=>state.cats)

  return (
    <div onClick={clickHandler} className={`flex justify-between px-4 border-y-2 py-2 cursor-pointer rounded-r-lg ${selectedCat.id === id ? 'bg-blue-700 text-blue-200' : 'bg-blue-200 text-blue-700' }`} >
    <h3 className='font-bold  text-xl'>{name }</h3>
    <p className='bg-gray-500 text-gray-300 font-semibold p-2 rounded-full w-10 h-10 flex items-center justify-center '>{age}</p>
</div>
  )
}

export default CatsNameLeft