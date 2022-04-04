import Header from "../../components/Header";
import About from "../../sections/About";
import { Container } from "./style";

const PageAbout = () => {
  return (
    <div>
      <Container>
        <About current={1} page/>
      </Container>
    </div>
  );
};

export default PageAbout;
