import { Wrapper } from "../PageAbout/style";
import Scroll from "../../animationsLottie/Scroll";
import Skills from "../../sections/Skills";
import { SkillsContainer } from "./style";
import SkillsList from "../../components/SkillsList";
import ControlButtons from "../../components/ControlButtons";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const PageSkills = () => {
  const [distance, setDistance] = useState(0);

  window.onscroll = (e) => {
    setDistance(window.scrollY);
  };

  return (
    <div>
      <Wrapper>
        <Skills current={2} page />
        <Scroll className="scroll mini" width={25} height={350} />
        <Scroll className="scroll big" width={50} height={500} />
      </Wrapper>
      <SkillsContainer>
        <h2 className="title">My Skill Set</h2>
        <SkillsList />
      </SkillsContainer>
      <AnimatePresence>
        {distance >= 975 && <ControlButtons />}
      </AnimatePresence>
    </div>
  );
};

export default PageSkills;
