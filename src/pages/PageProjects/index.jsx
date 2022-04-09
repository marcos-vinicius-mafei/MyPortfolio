import { Wrapper } from "../PageAbout/style";
import Scroll from "../../animationsLottie/Scroll";
import Projects from "../../sections/Projects";
import { ProjectsContainer } from "./style";
import ControlButtons from "../../components/ControlButtons";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ProjectsList from "../../components/ProjectsList";

const PageProjects = () => {
  const [distance, setDistance] = useState(0);

  window.onscroll = (e) => {
    setDistance(window.scrollY);
  };

  return (
    <div>
      <Wrapper>
        <Projects current={3} page />
        <Scroll className="scroll mini" width={25} height={350} />
        <Scroll className="scroll big" width={50} height={500} />
      </Wrapper>
      <ProjectsContainer>
        <h2 className="title">My Projects</h2>
        <ProjectsList/>
      </ProjectsContainer>
      <AnimatePresence>{distance >= 975 && <ControlButtons />}</AnimatePresence>
    </div>
  );
};

export default PageProjects;
