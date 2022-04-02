import Header from "../../components/Header";
import Start from "../../sections/Start";
import About from "../../sections/About";
import Skills from "../../sections/Skills"
import { Container } from "./style";
import ReactPageScroller from "react-page-scroller";
import { useState } from "react";
import PagesManager from "../../components/PagesManager"

const Home = () => {
  const [current, setCurrent] = useState(0);

  const getNextPage = () => {
    return "bye";
  };

  return (
    <Container>
      <Header />
      <PagesManager current={current}/>
      <ReactPageScroller
        animationTimer={600}
        transitionTimingFunction="ease-in-out"
        animationTimerBuffer={0.01}
        pageOnChange={(nextPage)=>{setCurrent(nextPage)}}
      >
        <Start current={current}/>
        <About current={current}/>
        <Skills current={current}/>
      </ReactPageScroller>
    </Container>
  );
};

export default Home;
