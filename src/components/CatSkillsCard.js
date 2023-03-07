import React, { useEffect, useState } from 'react'
import { useSortSkills2019, useSortProgress } from '../utils/allfunctions';
import SkillComponent from './SkillComponent';

const CatSkillsCard = ({cat}) => {
    const {skills }  = cat
   
    console.log(skills);
    // eslint-disable-next-line no-unused-vars
    const [catsSkills, setCatsSkills ] = useState(skills) || {}
  

const [sortedSkills, sortSkill2019] = useSortSkills2019(skills)
const [sortedSkillsProgress, sortSkillProgress] = useSortProgress(skills)

const sorting2019 =(order, year) =>{
    sortSkill2019({order: order, year: year})
    setCatsSkills(() => sortedSkills)
}
const bottom3Progress =() =>{
    console.log('clicked');
    sortSkillProgress()
    setCatsSkills(() => sortedSkillsProgress.slice(0,3))
}
const top3Progress =() =>{
    console.log('clicked');
    sortSkillProgress()
    setCatsSkills(() => sortedSkillsProgress.slice(-3))
}

// const top3Progress = (start, limit)=>{
//     const sortedSkill = [...cat.skills];
//     sortedSkill.sort((a, b)=> (a.skill2024 - a.skill2019)/a.skill2019 - (b.skill2024 - b.skill2019 )/b.skill2019)
//     console.log(sortedSkill);
//     // if(limit){
//         setCatsSkills(() => sortedSkills)

//     // } else {
//     //     setCatsSkills(sortedSkill)
//     // }


// }




  return (
    <div className="overflow-x-auto w-8/12">
  <table class="border-collapse border border-slate-400 w-full">
  <thead>
    <tr>
      <th class="border border-slate-300 ">Sl</th>
      <th class="border border-slate-300 ">skill Name</th>
      <th class="border border-slate-300 ">2019</th>
      <th class="border border-slate-300 ">2024</th>
    </tr>
  </thead>
  <tbody>
    {
        catsSkills.map((skill, i)=> <SkillComponent skill= {skill} index = {i+1} /> )
    }


  
  </tbody>
</table>
<div className='flex gap-3 my-8'>
     <button className='bg-blue-500 text-blue-200 font-semibold px-4 py-2  text-xl' onClick={() => sorting2019('ascending', 2019) }>sort   2019 ascending</button> 
     <button className='bg-green-500 text-green-200 font-semibold px-4 py-2  text-xl' onClick={() => sorting2019('descending', 2019) }>sort   2019 descending </button> 
     <button className='bg-blue-500 text-blue-200 font-semibold px-4 py-2  text-xl' onClick={() => sorting2019('ascending', 2024) }>sort 2024 ascending</button>  
     <button className='bg-green-500 text-green-200 font-semibold px-4 py-2  text-xl' onClick={() => sorting2019('descending', 2024) }>sort   2024 descending </button> 

     <button className='bg-blue-500 text-blue-200 font-semibold px-4 py-2 text-xl ' onClick={()=>top3Progress(0,3)}>Top 3 accelerating</button> 
     <button className='bg-green-500 text-green-200 font-semibold px-4 py-2 text-xl ' onClick={()=>bottom3Progress(-3)}>bottom 3 accelerating</button> 

     <button className='bg-blue-500 text-blue-200 font-semibold px-4 py-2 text-xl ' >top 3</button> 
     <button className='bg-green-500 text-blue-200 font-semibold px-4 py-2 text-xl '>bottom 3</button> 
  
    
     
     </div>
</div>)
}

export default CatSkillsCard