import React from 'react'
import { useSelector } from 'react-redux'
import CatModal from './CatModal';





const ContainerCats = () => {
  const {cats} = useSelector(state => state.cats)|| {}
  console.log(cats);
  return (
    <div className='p-10  mx-auto my-8' > 
     <div  class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xl:w-full md:w-10/12 w-full mx-auto gap-20 md:gap-8 ">
      {
        cats?.map(cat => <CatModal key={cat.id}  cat={cat} />)
      }
      

     </div>

    </div>
  )
}

export default ContainerCats