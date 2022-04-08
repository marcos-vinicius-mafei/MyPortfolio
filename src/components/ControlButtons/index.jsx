import { Container } from "./style";
import { FaArrowUp, FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import Arrows from "../../animationsLottie/Arrows";

const ControlButtons = () => {
  const history = useHistory();

  return (
    <Container
      initial={{ marginBottom: "-40px", opacity: 0 }}
      animate={{ marginBottom: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ marginBottom: "-40px", opacity: 0 }}
      key="controlButtons"
    >
      <Arrows className="circle--button" onClick={() => history.push("/")} />
      <Arrows
        className="circle--button arrow--up"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
    </Container>
  );
};

export default ControlButtons;
