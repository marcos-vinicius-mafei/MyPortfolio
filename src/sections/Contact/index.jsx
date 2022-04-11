import { Infos } from "../Start/style";
import { Container } from "../About/style";
import lines from "../../images/lines.svg";
import { Circles } from "../Skills/style";
import { motion } from "framer-motion";
import PaperPlane from "../../animationsLottie/PaperPlane";
import { FaGithubSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = ({ current }) => {
  return (
    <>
      {current === 4 && (
        <Container id="Contact">
          <Infos
            className="infos--main"
            initial={{ opacity: 0, marginLeft: "-400px" }}
            animate={{ opacity: 1, marginLeft: 0 }}
            transition={{ duration: 1.2, type: "spring" }}
          >
            <div className="title">
              <h1>Contact</h1>
              <img src={lines} alt="dashes" />
            </div>
            <div className="mini--container">
              <a href="mailto:marcosmafeimachado@gmail.com">
                <h4 className="email">marcosmafeimachado@gmail.com</h4>
              </a>
              <div className="icons--container">
                <a
                  href="https://www.linkedin.com/in/marcosvin%C3%ADciusmafeimachado/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaLinkedin className="icons" />
                </a>
                <a
                  href="https://github.com/marcos-vinicius-mafei"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaGithubSquare className="icons" />
                </a>
                <a
                  href="https://www.instagram.com/marcosmafei/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaInstagram className="icons" />
                </a>
              </div>
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
              <motion.div
                className="paper--plane"
                initial={{ opacity: 0, scaleX: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleX: 1, scaleY: 1 }}
                transition={{ delay: 0.5, duration: 1.2, type: "spring" }}
              >
                <PaperPlane className="mini--plane" size={200} />
                <PaperPlane className="mid--plane" size={280} />
                <PaperPlane className="big--plane" size={380} />
              </motion.div>
            </motion.div>
            <Infos
              className="infos contact"
              initial={{ opacity: 0, marginLeft: "-400px" }}
              animate={{ opacity: 1, marginLeft: 0 }}
              transition={{ duration: 1.2 }}
            >
              <div className="title">
                <h1>Contact</h1>
                <img src={lines} alt="dashes" />
              </div>
              <div className="mini--container">
                <a href="mailto:marcosmafeimachado@gmail.com">
                  <h4 className="email">marcosmafeimachado@gmail.com</h4>
                </a>
                <div className="icons--container">
                  <a
                    href="https://www.linkedin.com/in/marcosvin%C3%ADciusmafeimachado/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaLinkedin className="icons" />
                  </a>
                  <a
                    href="https://github.com/marcos-vinicius-mafei"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaGithubSquare className="icons" />
                  </a>
                  <a
                    href="https://www.instagram.com/marcosmafei/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaInstagram className="icons" />
                  </a>
                </div>
              </div>
            </Infos>
          </Circles>
        </Container>
      )}
    </>
  );
};

export default Contact;
