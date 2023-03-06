import React from 'react'

const CatModal = ({cat}) => {
    const {  name,  image, click} = cat || {};
  return (
    <div className= 'card md:w-80 sm:w-11/12 bg-base-100 shadow-xl mx-auto rounded-xl '>
        <figure className='mt-3  w-full h-96 relative' >
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
                        <div>
                            <div class="flex justify-between">
                               
                                <label for="my-modal"   class="bg-red-200 h-11 w-10 text-red-600 px-2 rounded-full hover:bg-sky-200 hover:text-sky-600  flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                  </svg></label>
                            </div>                           
                        </div>
                    </div>

      </div>
  )
}

export default CatModal