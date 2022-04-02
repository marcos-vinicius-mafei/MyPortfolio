import Header from "../../components/Header";
import Start from "../../sections/Start";
import {Container} from "./style"
import About from "../../sections/About"

const Home = () => {
  return (
    <Container>
      <Header />
      {/* <Start /> */}
      <About/>
    </Container>
  );
};

export default Home;
