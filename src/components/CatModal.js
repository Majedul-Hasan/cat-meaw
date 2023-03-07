import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCat, patchClick, updateClick } from '../features/cats/catsSlice';

const CatModal = ({cat}) => {
    const { id, name,  image, click} = cat || {};
  const dispatch = useDispatch()

    const clickHandler = () =>{
        dispatch(fetchCat(id))
        // dispatch(fetchCats())
    
        dispatch(patchClick({id, click}))
        // dispatch(fetchCats())
        dispatch(updateClick(id))
       }
  return (
    <div className= 'card md:w-80 sm:w-11/12 bg-base-100 shadow-xl mx-auto rounded-xl '>
        <figure className='mt-3  w-full h-96 relative' onClick={clickHandler} >
            {/* <div className='mt-3  bg-no-repeat  w-full h-full absolute  ' style={{background : `url(${image})`, filter: 'blur(8px)', zIndex: '1' }}> */}
             {/* </div> */}
            <div className='h-96 block mx-auto z-10' >
                <img src={image} alt={name} className='h-96 block mx-auto ' />
            </div>           
        </figure>
                    <div class="card-body sm:p-1 md:p-3">
                        <div>
                            <h2 class="card-title font-semibold  ">
                              {name}                       
                            </h2>
                               
                            <h2 class="card-title font-semibold  ">
                            No. of times clicked : {click}                       
                            </h2>
                               
                            
                        </div>
                        <hr />
                        <div class="flex justify-between">                               
                                <Link to={`/${id}`} > cat detail
                                </Link>
                                                   
                        </div>
                    </div>

      </div>
  )
}

export default CatModal