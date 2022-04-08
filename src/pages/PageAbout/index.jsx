import About from "../../sections/About";
import { Wrapper, MyInfos, Section, Container, Circle } from "./style";
import { motion, useAnimation,AnimatePresence } from "framer-motion";
import myPicture from "../../images/myPicture.png";
import midScreen from "../../images/midScreen.png";
import { useEffect,useState } from "react";
import { useInView } from "react-intersection-observer";
import Scroll from "../../animationsLottie/Scroll";
import ControlButtons from "../../components/ControlButtons";

const PageAbout = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.6 });

  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.6 });

  const Circle1 = useAnimation();

  const Circle2 = useAnimation();

  const Container1 = useAnimation();

  const Container2 = useAnimation();

  useEffect(() => {
    if (inView1) {
      Circle1.start({
        marginLeft: 0,
        opacity: 1,
        rotate: 0,
        transition: {
          duration: 1.5,
        },
      });
      Container1.start({
        marginRight: 0,
        opacity: 1,
        transition: {
          duration: 1.5,
        },
      });
    } else {
      Circle1.start({ opacity: 0, marginLeft: "-400px" });
      Container1.start({ opacity: 0, marginRight: "-400px" });
    }
  }, [inView1]);

  useEffect(() => {
    if (inView2) {
      Circle2.start({
        marginRight: 0,
        opacity: 1,
        transition: {
          duration: 1.5,
        },
      });
      Container2.start({
        marginLeft: 0,
        opacity: 1,
        transition: {
          duration: 1.5,
        },
      });
    } else {
      Circle2.start({ opacity: 0, marginRight: "-400px" });
      Container2.start({ opacity: 0, marginLeft: "-400px" });
    }
  }, [inView2]);

  const [distance, setDistance] = useState(0);

  window.onscroll = (e) => {
    setDistance(window.scrollY);
  };

  return (
    <div>
      <Wrapper>
        <About current={1} page />
        <Scroll className="scroll mini" width={25} height={350} />
        <Scroll className="scroll big" width={50} height={500} />
      </Wrapper>
      <MyInfos>
        <Section ref={ref1}>
          <Circle animate={Circle1}>
            <motion.img
              src={myPicture}
              alt="A picture of me"
              className="image"
            />
          </Circle>
          <Container animate={Container1}>
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
        <Section reverse="reverse" ref={ref2}>
          <Circle animate={Circle2}>
            <motion.div className="blue--circle">
              <img src={midScreen} alt="A picture of me" className="computer" />
            </motion.div>
          </Circle>
          <Container animate={Container2}>
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
      <AnimatePresence>{distance >= 500 && <ControlButtons />}</AnimatePresence>
    </div>
  );
};

export default PageAbout;
