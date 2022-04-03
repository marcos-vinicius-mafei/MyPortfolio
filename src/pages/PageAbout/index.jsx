import Header from "../../components/Header";
import About from "../../sections/About";
import { Container } from "./style";

const PageAbout = () => {
  return (
    <div>
      <Header />
      <Container>
        <About current={1} />
      </Container>
    </div>
  );
};

export default PageAbout;
