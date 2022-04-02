import lines from "../../images/lines.svg";
import Button from "../../components/Button";
import { Container, Card } from "./style";
import { Infos } from "../Start/style";
import myPicture from "../../images/myPicture.png";
import { IoLogoGameControllerB } from "react-icons/io";
import { FaDog, FaCode } from "react-icons/fa";
import Heart from "../../animationsLottie/Heart";

const About = ({ current }) => {
  return (
    <>
      {current === 1 && (
        <Container id="about">
          <Infos
            className="infos--main"
            initial={{ opacity: 0, marginLeft: "-400px" }}
            animate={{ opacity: 1, marginLeft: 0 }}
            transition={{ duration: 1.2, type: "spring" }}
          >
            <div className="title">
              <h1>About me</h1>
              <img src={lines} alt="dashes" />
            </div>
            <div className="mini--container">
              <h4>Passionate about technology, games and animals</h4>
              <Button>Show more</Button>
            </div>
          </Infos>
          <Card
            initial={{ opacity: 0, marginRight: "-400px" }}
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
              initial={{ opacity: 0, marginLeft: "-400px" }}
              animate={{ opacity: 1, marginLeft: 0 }}
              transition={{ duration: 1.2 }}
            >
              <div className="title">
                <h1>About me</h1>
                <img src={lines} alt="dashes" />
              </div>
              <div className="mini--container">
                <h4>Passionate about technology, games and animals</h4>
                <Button>Show more</Button>
              </div>
            </Infos>
          </Card>
        </Container>
      )}
    </>
  );
};

export default About;
