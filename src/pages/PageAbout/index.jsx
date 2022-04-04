import About from "../../sections/About";
import { Wrapper, MyInfos, Section, Container, Circle } from "./style";
import { motion } from "framer-motion";
import myPicture from "../../images/myPicture.png";
import midScreen from "../../images/midScreen.png";

const PageAbout = () => {
  return (
    <div>
      <Wrapper>
        <About current={1} page />
      </Wrapper>
      <MyInfos>
        <Section>
          <Circle>
            <motion.img
              src={myPicture}
              alt="A picture of me"
              className="image"
            />
          </Circle>
          <Container>
            <div className="title--container">
              <motion.div className="circle blue" />
              <h3 className="title">Who I am</h3>
            </div>
            <div>
              <p>
                My name is Marcos Vinícius Mafei Machado. I was born in Santa
                Catarina, Brazil in 2003. I'm passionate about animals, that's
                why I have four pets. I like to play some games in my spare time
                and have fun on calls with my friends.
              </p>
              <p>
                I've always loved technology and I'm becoming more and more
                fascinated and excited about everything the tech world has to
                offer. It's amazing to work with something you truly love.
              </p>
            </div>
          </Container>
        </Section>
        <Section>
          <Circle>
            <motion.div className="blue--circle">
              <motion.img
                src={midScreen}
                alt="A picture of me"
                className="computer"
              />
            </motion.div>
          </Circle>
          <Container>
            <div className="title--container">
              <motion.div className="circle purple" />
              <h3 className="title">What I do</h3>
            </div>
            <div>
              <p>
                I am currently a front-end Dev and computer engineering student.
              </p>
              <p>
                I have already carried out several projects and I seek to
                continue evolving my skills more and more.
              </p>
            </div>
          </Container>
        </Section>
      </MyInfos>
    </div>
  );
};

export default PageAbout;
