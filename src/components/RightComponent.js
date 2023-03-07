import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editActive, editInactive } from '../features/cats/catsSlice'
import AddCatFormComponent from './AddFormComponent'
import EditCatFormComponent from './EditCatFormComponent'





const RightComponent = () => {
  const [newCat, setNewCat] = useState(false)
  const {cat, editing} = useSelector(state => state.cats)|| {}

  const dispatch = useDispatch()


  
const editActiveHandler = ()=>{
  setNewCat(false)
  dispatch(editActive(cat))
}
const addNewCatHandler = ()=>{
  setNewCat(false)
  dispatch(editInactive(cat))
}



  return (
    <div className='mx-3 p-0  w-1/2 bg-slate-300'>
      <div className='flex gap-3 py-5 justify-center'>
        <button className='bg-sky-600 text-yellow-50 py-2 px-5 text-2xl font-semibold capitalize rounded-lg border-0 hover:bg-sky-300 hover:text-sky-700'
         onClick={addNewCatHandler}
         >
          add a new cat
        </button>
        <button className='bg-sky-600 text-yellow-50 py-2 px-5 text-2xl font-semibold capitalize rounded-lg border-0 hover:bg-sky-300 hover:text-sky-700' 
        onClick={editActiveHandler}
        >
          <></>
          edit this cat
        </button>

      </div>
      {
        editing?.name !== undefined ? <EditCatFormComponent editing = {editing} /> : <AddCatFormComponent newCat={newCat} />
      }
      
   

   </div>
  )
}

export default RightComponent