import { Wrapper } from "../PageAbout/style";
import Scroll from "../../animationsLottie/Scroll";
import Skills from "../../sections/Skills";
import {SkillsContainer} from "./style"
import SkillsList from "../../components/SkillsList"

const PageSkills = () => {
  return (
    <div>
      <Wrapper>
        <Skills current={2} page />
        <Scroll className="scroll mini" width={25} height={350} />
        <Scroll className="scroll big" width={50} height={500} />
      </Wrapper>
      <SkillsContainer>
        <h2 className="title">My Skill Set</h2>
        <SkillsList/>
      </SkillsContainer>
    </div>
  );
};

export default PageSkills;
