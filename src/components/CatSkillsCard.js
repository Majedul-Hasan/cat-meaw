import React from 'react'
import SkillComponent from './SkillComponent';

const CatSkillsCard = ({cat}) => {
    const {skills }  = cat
   console.log(cat.skills);
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
    <tr className='py-3'>
      <td class="border border-slate-300 py-3 text-center ">1</td>
      <td class="border border-slate-300 pl-3 ">Agility and Coordination</td>
      <td class="border border-slate-300 text-center">64</td>
      <td class="border border-slate-300 text-center">71</td>
    </tr>
    {
        skills.map((skill, i)=> <SkillComponent skill= {skill} index = {i+1} /> )
    }


  
  </tbody>
</table>
</div>)
}

export default CatSkillsCard