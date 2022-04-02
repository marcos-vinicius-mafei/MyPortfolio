import lines from "../../images/lines.svg";
import Button from "../../components/Button";
import { Container, Card } from "./style";
import { Infos } from "../Start/style";
import myPicture from "../../images/myPicture.png";

const About = () => {
  return (
    <Container>
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
      <Card>
        <img src={myPicture} alt="my photo" className="myPhoto" />
        <Infos
          className="infos"
          initial={{ opacity: 0, marginLeft: "-400px" }}
          animate={{ opacity: 1, marginLeft: 0 }}
          transition={{ duration: 1.2}}
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
  );
};

export default About;
