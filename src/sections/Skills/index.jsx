import { Infos } from "../Start/style";
import { Container } from "../About/style";
import lines from "../../images/lines.svg";
import Button from "../../components/Button";
import { Circles } from "./style";
import { motion } from "framer-motion";
import skillsComputer from "../../images/skillsComputer.png";

const Skills = ({ current }) => {
  return (
    <>
      {current === 2 && (
        <Container id="Skills">
          <Infos
            className="infos--main"
            initial={{ opacity: 0, marginLeft: "-400px" }}
            animate={{ opacity: 1, marginLeft: 0 }}
            transition={{ duration: 1.2, type: "spring" }}
          >
            <div className="title">
              <h1>Skills</h1>
              <img src={lines} alt="dashes" />
            </div>
            <div className="mini--container">
              <h4>Java Script, Type Script, React, Node.js and more!</h4>
              <Button>Show more</Button>
            </div>
          </Infos>
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
                src={skillsComputer}
                alt="computer with my skills"
                className="skills--computer"
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
                <h1>Skills</h1>
                <img src={lines} alt="dashes" />
              </div>
              <div className="mini--container">
                <h4>Java Script, Type Script, React, Node.js and more!</h4>
                <Button>Show more</Button>
              </div>
            </Infos>
          </Circles>
        </Container>
      )}
    </>
  );
};

export default Skills;
