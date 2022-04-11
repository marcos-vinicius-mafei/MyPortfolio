import lines from "../../images/lines.svg";
import computer from "../../images/computer.png";
import { Container, Infos } from "./style";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Grabbing from "../../animationsLottie/Grabbing";

const Start = ({ current }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <>
      {current === 0 && (
        <Container id="Start">
          <Infos
            initial={{ opacity: 0, marginLeft: "-400px" }}
            animate={{ opacity: 1, marginLeft: 0 }}
            transition={{ duration: 1.2, type: "spring" }}
          >
            <div className="title">
              <h1>Marcos Vinícius Mafei Machado</h1>
              <img src={lines} alt="dashes" />
            </div>
            <div className="mini--titles">
              <h4 className="dev">Web Developer</h4>
              <h4 className="and">{"&"}</h4>
              <h4 className="engineer">Computer Engineering</h4>
            </div>
          </Infos>
          <motion.div
            className="circle--wrapper"
            style={{ perspective: 2000 }}
            initial={{ opacity: 0, marginRight: "-400px", rotate: "180deg" }}
            animate={{ opacity: 1, marginRight: 0, rotate: 0 }}
            transition={{ delay: 0.1, duration: 1.5, type: "spring"}}
          >
            <motion.div
              className="circle--computer"
              style={{ x, y, rotateX, rotateY, z: 100 }}
              drag
              dragElastic={0.16}
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              whileTap={{ cursor: "grabbing" }}
            >
              <motion.div
                className="second--circle"
                initial={{ scaleY: 0, scaleX: 0 }}
                animate={{ scaleY: 1, scaleX: 1 }}
                transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              />
              <div className="image--holder">
                <motion.img
                  src={computer}
                  alt="computer"
                  style={{ x, y, rotateX, rotateY, rotate: "-6deg", z: 100000 }}
                  drag
                  dragElastic={0.12}
                  whileTap={{ cursor: "grabbing" }}
                />
              </div>
              <Grabbing />
            </motion.div>
          </motion.div>
        </Container>
      )}
    </>
  );
};

export default Start;
