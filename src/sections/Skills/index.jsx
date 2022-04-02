import { Infos } from "../Start/style";
import { Container } from "../About/style";
import lines from "../../images/lines.svg";
import Button from "../../components/Button";
import { Circles } from "./style";

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
          <Circles>
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
