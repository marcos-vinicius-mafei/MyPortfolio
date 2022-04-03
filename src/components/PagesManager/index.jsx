import { Container } from "./style";
import { useHistory } from "react-router-dom";

const PagesManager = ({ current, setCurrent }) => {
  const history = useHistory();

  return (
    <Container>
      <div
        style={
          current === 0
            ? { backgroundColor: "var(--primary-Purple", transition: "0.6s" }
            : { backgroundColor: "var(--light", transition: "0.6s" }
        }
        onClick={() => {
          setCurrent(0);
          window.scrollTo("#Start", { behavior: "smooth" });
        }}
      ></div>
      <div
        style={
          current === 1
            ? { backgroundColor: "var(--primary-Purple", transition: "0.6s" }
            : { backgroundColor: "var(--light", transition: "0.6s" }
        }
        onClick={() => {
          setCurrent(1);
          window.scrollTo("#About", { behavior: "smooth" });
        }}
      ></div>
      <div
        style={
          current === 2
            ? { backgroundColor: "var(--primary-Purple", transition: "0.6s" }
            : { backgroundColor: "var(--light", transition: "0.6s" }
        }
        onClick={() => {
          setCurrent(2);
          window.scrollTo("#Skills", { behavior: "smooth" });
        }}
      ></div>
      <div
        style={
          current === 3
            ? { backgroundColor: "var(--primary-Purple", transition: "0.6s" }
            : { backgroundColor: "var(--light", transition: "0.6s" }
        }
        onClick={() => {
          setCurrent(3);
          window.scrollTo("#Projects", { behavior: "smooth" });
        }}
      ></div>
      <div
        style={
          current === 4
            ? { backgroundColor: "var(--primary-Purple", transition: "0.6s" }
            : { backgroundColor: "var(--light", transition: "0.6s" }
        }
        onClick={() => {
          setCurrent(4);
          window.scrollTo("#Contact", { behavior: "smooth" });
        }}
      ></div>
    </Container>
  );
};

export default PagesManager;
