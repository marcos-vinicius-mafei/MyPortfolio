import SkillCard from "../SkillCard";
import mySkills from "../../Skills";
import { FancyList } from "./style";

const SkillsList = () => {
  return (
    <FancyList>
      {mySkills.map((skill) => (
        <li>
          <SkillCard
            image={skill.image}
            text={skill.text}
            url={skill.url}
            key={skill.text}
          />
        </li>
      ))}
    </FancyList>
  );
};

export default SkillsList;
