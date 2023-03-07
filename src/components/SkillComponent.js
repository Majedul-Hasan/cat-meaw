import React from 'react'

const SkillComponent = ({skill, index}) => {
    const {skill2019, skill2024, skillName} =skill
  return (
    <tr className='py-3'>
      <td class="border border-slate-300 py-3 text-center  ">{index}</td>
      <td class="border border-slate-300 pl-3 ">{skillName}</td>
      <td class="border border-slate-300 text-center">{skill2019}</td>
      <td class="border border-slate-300 text-center">{skill2024}</td>
    </tr>
  )
}

export default SkillComponent