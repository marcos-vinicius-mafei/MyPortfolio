import About from "../../sections/About";
import { Wrapper, MyInfos, Section, Container, Circle } from "./style";
import { motion, useAnimation } from "framer-motion";
import myPicture from "../../images/myPicture.png";
import midScreen from "../../images/midScreen.png";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Scroll from "../../animationsLottie/Scroll";
import ControlButtonsPresence from "../../components/ControlButtonsPresence";

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
                Hello! I’m Marcos Vinícius Mafei Machado, a tech enthusiast born
                in 2003 in Santa Catarina, Brazil. From an early age, I have
                been fascinated by the endless possibilities of technology, and
                my passion for this dynamic field continues to grow. I thrive on
                continuous learning and innovation, always seeking to expand my
                knowledge and skills.
              </p>
              <p>
                When I’m not immersed in the tech world, I am an animal lover
                and proud pet parent to four wonderful companions. In my free
                time, I enjoy playing story-driven games and exploring new
                worlds. I also love being part of tech communities and
                participating in programming events, where I can connect with
                others and stay updated on the latest trends and advancements.
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
            <div className="extra--padding">
              <p>I work as a Full Stack Web & Mobile Developer.</p>
              <p>
                I have successfully completed numerous projects and am dedicated
                to continuously enhancing my skills. My goal is to consistently
                deliver exceptional results while growing and evolving in my
                expertise.
              </p>
              <p>
              For more details on my experience and background, please take a look at <a href="https://marcos-vinicius-mafei.github.io/Resume/">my full resume</a>.
              </p>
            </div>
          </Container>
        </Section>
      </MyInfos>
      <ControlButtonsPresence />
    </div>
  );
};

export default PageAbout;
