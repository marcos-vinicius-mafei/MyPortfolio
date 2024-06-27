import { Wrapper } from "../PageAbout/style";
import Scroll from "../../animationsLottie/Scroll";
import Projects from "../../sections/Projects";
import { ProjectsContainer } from "./style";
import ProjectsList from "../../components/ProjectsList";
import ControlButtonsPresence from "../../components/ControlButtonsPresence";

const PageProjects = () => {
  return (
    <div>
      <Wrapper>
        <Projects current={3} page />
        <Scroll className="scroll mini" width={25} height={350} />
        <Scroll className="scroll big" width={50} height={500} />
      </Wrapper>
      <ProjectsContainer>
        <h2 className="title">My Projects</h2>
        <ProjectsList />
      </ProjectsContainer>
      <ControlButtonsPresence presenceDistance={975} />
    </div>
  );
};

export default PageProjects;
