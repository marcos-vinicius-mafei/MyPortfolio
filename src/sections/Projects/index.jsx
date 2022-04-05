import lines from "../../images/lines.svg";
import Button from "../../components/Button";
import { motion } from "framer-motion";
import { Circles, Wrapper } from "./style";
import { Infos } from "../Start/style";
import { Container } from "../About/style";
import midScreen from "../../images/midScreen.png";
import bigScreen from "../../images/bigScreen.png";

const Projects = ({ current }) => {
  return (
    <>
      {current === 3 && (
        <Container id="Projects">
          <Infos
            className="infos--main"
            initial={{ opacity: 0, marginLeft: "-400px" }}
            animate={{ opacity: 1, marginLeft: 0 }}
            transition={{ duration: 1.2, type: "spring" }}
          >
            <div className="title">
              <h1>Projects</h1>
              <img src={lines} alt="dashes" />
            </div>
            <div className="mini--container">
              <h4>Some of my previous projects</h4>
              <Button>Show more</Button>
            </div>
          </Infos>
          <Wrapper>
            <Circles
              initial={{ opacity: 0, scaleX: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleX: 1, scaleY: 1 }}
              transition={{ duration: 1.2, type: "spring" }}
            >
              <motion.div
                className="circle--blue"
                initial={{ opacity: 0, scaleX: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleX: 1, scaleY: 1 }}
                transition={{ delay: 0.3, duration: 1.2, type: "spring" }}
              >
                <motion.img
                  src={bigScreen}
                  alt="computer with my project"
                  className="project--big--computer"
                  initial={{ opacity: 0, scaleX: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleX: 1, scaleY: 1 }}
                  transition={{duration: 1.2, type: "spring" }}
                />
              </motion.div>
            </Circles>
            <Circles
              display="none"
              initial={{ opacity: 0, scaleX: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleX: 1, scaleY: 1 }}
              transition={{ delay: 0.4,duration: 1.2, type: "spring" }}
            >
              <motion.div
                className="circle--blue"
                initial={{ opacity: 0, scaleX: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleX: 1, scaleY: 1 }}
                transition={{ delay: 0.6, duration: 1.2, type: "spring" }}
              >
                <motion.img
                  src={midScreen}
                  alt="computer with my project"
                  className="project--computer"
                  initial={{ opacity: 0, scaleX: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleX: 1, scaleY: 1 }}
                  transition={{duration: 1.2, type: "spring" }}
                />
              </motion.div>
            </Circles>
          </Wrapper>
          <Circles
            display="initial"
            initial={{ opacity: 0, scaleX: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleX: 1, scaleY: 1 }}
            transition={{ duration: 1.2, type: "spring" }}
          >
            <motion.div
              className="circle--blue"
              initial={{ opacity: 0, scaleX: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleX: 1, scaleY: 1 }}
              transition={{ delay: 0.3, duration: 1.2, type: "spring" }}
            >
              <motion.img
                src={midScreen}
                alt="computer with my project"
                className="project--computer"
                initial={{ opacity: 0, scaleX: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleX: 1, scaleY: 1 }}
                transition={{duration: 1.2, type: "spring" }}
              />
            </motion.div>
            <Infos
              className="infos"
              initial={{ opacity: 0, marginLeft: "-400px" }}
              animate={{ opacity: 1, marginLeft: 0 }}
              transition={{ duration: 1.2 }}
            >
              <div className="title">
                <h1>Projects</h1>
                <img src={lines} alt="dashes" />
              </div>
              <div className="mini--container">
                <h4>Some of my previous projects</h4>
                <Button>Show more</Button>
              </div>
            </Infos>
          </Circles>
        </Container>
      )}
    </>
  );
};

export default Projects;
