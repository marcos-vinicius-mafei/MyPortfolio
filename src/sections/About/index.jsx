import lines from "../../images/lines.svg";
import Button from "../../components/Button";
import { Container, Card, Circle } from "./style";
import { Infos } from "../Start/style";
import myPicture from "../../images/myPicture.png";
import { IoLogoGameControllerB } from "react-icons/io";
import { FaDog, FaCode } from "react-icons/fa";
import Heart from "../../animationsLottie/Heart";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { usePage } from "../../providers/currentPage";

const About = ({ current, page = false }) => {
  const history = useHistory();

  const { setCurrent } = usePage();

  return (
    <>
      {current === 1 && (
        <Container id="About">
          <Infos
            className="infos--main"
            initial={
              page
                ? { opacity: 1, marginLeft: 0 }
                : { opacity: 0, marginLeft: "-400px" }
            }
            animate={{ opacity: 1, marginLeft: 0 }}
            transition={{ duration: 1.2, type: "spring" }}
          >
            <div className="title">
              <h1>About me</h1>
              <img src={lines} alt="dashes" />
            </div>
            <div className="mini--container">
              <h4>Passionate about technology, games and animals</h4>
              {page ? (
                <Button
                  onClick={() => {
                    history.push("/");
                  }}
                >
                  Show less
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    history.push("/about");
                  }}
                >
                  Show more
                </Button>
              )}
            </div>
          </Infos>
          <Card
            initial={
              page
                ? { opacity: 1, marginRight: 0 }
                : { opacity: 0, marginRight: "-400px" }
            }
            animate={{ opacity: 1, marginRight: 0 }}
            transition={{ duration: 1.2, type: "spring" }}
          >
            <img src={myPicture} alt="my photo" className="myPhoto" />
            <IoLogoGameControllerB className="icons controller" />
            <FaDog className="icons dog" />
            <FaCode className="icons code" />
            <Heart className="hearts heart1" size={60} />
            <Heart className="hearts heart2" size={60} />
            <Heart className="hearts heart3" size={60} />
            <Heart className="bigHearts heart1" size={100} />
            <Heart className="bigHearts heart2" size={100} />
            <Heart className="bigHearts heart3" size={100} />
            <Infos
              className="infos"
              initial={
                page
                  ? { opacity: 1, marginLeft: 0 }
                  : { opacity: 0, marginLeft: "-400px" }
              }
              animate={{ opacity: 1, marginLeft: 0 }}
              transition={{ duration: 1.2 }}
            >
              <div className="title">
                <h1>About me</h1>
                <img src={lines} alt="dashes" />
              </div>
              <div className="mini--container">
                <h4>Passionate about technology, games and animals</h4>
                {page ? (
                  <Button
                    onClick={() => {
                      setCurrent(1);
                      history.push("/");
                    }}
                  >
                    Show less
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      history.push("/about");
                    }}
                  >
                    Show more
                  </Button>
                )}
              </div>
            </Infos>
          </Card>
          <motion.div
            className="circles--wrapper"
            initial={
              page
                ? { opacity: 1, marginBottom: 0 }
                : { opacity: 0, marginBottom: "-600px" }
            }
            animate={{ opacity: 1, marginBottom: 0 }}
            transition={{ duration: 1.2, type: "spring" }}
          >
            <Circle className="circle1">
              <motion.div
                className="blue--circle"
                initial={
                  page ? { scaleX: 1, scaleY: 1 } : { scaleX: 0, scaleY: 0 }
                }
                animate={{ scaleX: 1, scaleY: 1 }}
                transition={{ duration: 1.2, delay: 0.1, type: "spring" }}
              >
                <motion.div className="icon--wrapper">
                  <Heart className="absolute--hearts" size={100} />
                  <IoLogoGameControllerB className="icons" />
                </motion.div>
              </motion.div>
            </Circle>
            <Circle className="circle2">
              <motion.div
                className="blue--circle"
                initial={
                  page ? { scaleX: 1, scaleY: 1 } : { scaleX: 0, scaleY: 0 }
                }
                animate={{ scaleX: 1, scaleY: 1 }}
                transition={{ duration: 1.2, delay: 0.1, type: "spring" }}
              >
                <motion.div className="icon--wrapper">
                  <Heart className="absolute--hearts" size={100} />
                  <FaCode className="icons" />
                </motion.div>
              </motion.div>
            </Circle>
            <Circle className="circle3">
              <motion.div
                className="blue--circle"
                initial={
                  page ? { scaleX: 1, scaleY: 1 } : { scaleX: 0, scaleY: 0 }
                }
                animate={{ scaleX: 1, scaleY: 1 }}
                transition={{ duration: 1.2, delay: 0.1, type: "spring" }}
              >
                <motion.div className="icon--wrapper">
                  <Heart className="absolute--hearts" size={100} />
                  <FaDog className="icons" />
                </motion.div>
              </motion.div>
            </Circle>
          </motion.div>
        </Container>
      )}
    </>
  );
};

export default About;
