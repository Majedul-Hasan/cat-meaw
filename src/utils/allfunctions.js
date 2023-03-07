import { useState } from "react";

export function useSortSkills2019(skills, order) {
  const [sortedSkills, setSortedSkills] = useState(skills);

  const sortSkill2019 = ({order, year}) => {
    const sortedSkill = [...sortedSkills];
    const skillYear = `skill${year}`
    if (order === 'descending'){
        sortedSkill.sort((a, b) => b[skillYear] - a[skillYear]);
        } else if (order === 'ascending'){
            sortedSkill.sort((a, b) => a[skillYear] - b[skillYear])
        }
    setSortedSkills(() => sortedSkill);
  };

  return [sortedSkills, sortSkill2019];
}
export function useSortProgress(skills, order) {
  const [sortedSkillsProgress, setSortedSkills] = useState(skills);

  const sortSkillProgress = () => {
    const sortedSkill = [...sortedSkillsProgress];
    sortedSkill.sort((a, b) =>  (a.skill2024 - a.skill2019)/a.skill2019 - (b.skill2024 - b.skill2019 )/b.skill2019)
       
    setSortedSkills(() => sortedSkill);
  };

  return [sortedSkillsProgress, sortSkillProgress];
}