import Header from "../../components/Header";
import Start from "../../sections/Start";
import About from "../../sections/About";
import Skills from "../../sections/Skills"
import Projects from "../../sections/Projects";
import Contact from "../../sections/Contact"
import { Container } from "./style";
import ReactPageScroller from "react-page-scroller";
import { useState } from "react";
import PagesManager from "../../components/PagesManager"

const Home = () => {
  const [current, setCurrent] = useState(0);

  return (
    <Container>
      <Header setCurrent={setCurrent}/>
      <PagesManager current={current} setCurrent={setCurrent}/>
      <ReactPageScroller
        animationTimer={600}
        transitionTimingFunction="ease-in-out"
        animationTimerBuffer={0.01}
        pageOnChange={(nextPage)=>{setCurrent(nextPage)}}
        customPageNumber={current}
      >
        <Start current={current}/>
        <About current={current}/>
        <Skills current={current}/>
        <Projects current={current}/>
        <Contact current={current}/>
      </ReactPageScroller>
    </Container>
  );
};

export default Home;
