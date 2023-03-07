import React from 'react'
import { useSelector } from 'react-redux'
import {  useParams } from 'react-router-dom'
import CatDetailCard from './CatDetailCard'
import CatSkillsCard from './CatSkillsCard'
import HeaderComponent from './HeaderComponent'

const DetailPageCat = () => {
  const {catId} = useParams()

 const {cats} =  useSelector(state => state.cats) || {}


 
 const cat = cats.find(c => c.id === parseInt(catId))

 
  return (
   <React.Fragment>
    <HeaderComponent />
    <div className='flex'>
    <CatDetailCard cat={cat} />
    <CatSkillsCard cat={cat} />
    </div>

   </React.Fragment>
  )
}

export default DetailPageCat