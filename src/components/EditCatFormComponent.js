import React, { useState } from 'react'
import {  useDispatch } from 'react-redux'
import { updateCat, fetchCat } from '../features/cats/catsSlice'


const EditCatFormComponent = ({editing}) => {
  const dispatch = useDispatch();


  // eslint-disable-next-line no-unused-vars
  // const {isEditing} = useSelector(state=>state.cats)
  const [name, setName] = useState(editing.name)
  const [imgUrl, setImgUrl] = useState(editing.image)
  const [click, setClick] = useState(editing.click)
  const [description, setDescription] = useState(editing.desc)

  const submitHandler =(e)=>{
    e.preventDefault()
    const data = {      
      name,
      image : imgUrl,
      click,
      desc: description,
      skills: {
        'Agility and Coordination': [
          64,
          71
        ],
        'Hunting and Predatory Skills': [
          76,
          70
        ],
        Communication: [
          60,
          75
        ],
        Adaptability: [
          82,
          63
        ],
        Independence: [
          67,
          78
        ],
        'Affection and Socialization': [
          70,
          84
        ],
        Climbing: [
          90,
          95
        ],
        Balance: [
          88,
          96
        ],
        Senses: [
          86,
          90
        ],
        Flexibility: [
          75,
          83
        ],
        'Problem-solving': [
          67,
          78
        ],
        Stealth: [
          59,
          72
        ]
      }
      
    };
    //  console.log(data)
    dispatch(updateCat({id: editing.id,data}));
    dispatch(fetchCat(editing.id));


  }

  return (
    <div className="m-3">
         <form className="" 
      onSubmit={submitHandler}
      >
          {/* <!-- product name --> */}
          <div className="py-3">
            <label className='p-3'>Cat Name :</label>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              className="bg-transparent border-2 border-orange-400 w-full my-2 px-3 py-2 focus:bg-sky-700 focus:text-white"
              type="text"
              required
            />
          </div>
          <div className="py-3 ">
            <label className='my-2'>Cat image :</label>
            <input
              value={imgUrl}
              onChange={e => setImgUrl(e.target.value)}
              className="bg-transparent border-2 border-orange-400 w-full my-2 px-3 py-2  focus:bg-sky-700 focus:text-white"
              type="text"
              placeholder='please peste cat image url'
              required
            />
          </div>
          <div className="py-3 ">
            <label className='my-2'>Clicks :</label>
            <input
              value={click}
              onChange={e => setClick(e.target.value)}
              className="bg-transparent border-2 border-orange-400 w-full my-2 px-3 py-2  focus:bg-sky-700 focus:text-white"
              type="text"
              placeholder='please peste cat image url'
              required
            />
          </div>
          <div className="py-3 ">
            <label className='my-2'>Cat Description :</label>
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="bg-transparent border-2 border-orange-400 w-full my-2 px-3 py-2  focus:bg-sky-700 focus:text-white"
              type="text"
              placeholder='please peste cat image url'
              required
            />
          </div>
       
          {/* <!-- submit button --> */}
          <button type='submit' className="bg-teal-500 py-3 px-6 font-bold text-xl rounded-xl m-2">
            Update Cat
          </button>
          <button type='reset' className="bg-teal-500 py-3 px-6 font-bold text-xl rounded-xl m-2">
            Undo
          </button>
        </form>
    </div>
  )
}

export default EditCatFormComponent