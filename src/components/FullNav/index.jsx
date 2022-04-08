import { FancyNav } from "./style";
import Item from "./Item";
import { useHistory } from "react-router-dom";

const FullNav = ({ setCurrent, toogleNav, setLottieProps, lottieProps }) => {
  const history = useHistory();

  const variantsNav = {
    initial: { top: -1000 },
    final: { top: 0 },
  };

  const variantsItem = {
    initial: { opacity: 0, marginRight: 150 },
    final: { opacity: 1, marginRight: 0 },
  };

  const tootleClick = (page) => {
    history.push("/");
    setLottieProps({
      ...lottieProps,
      direction: lottieProps.direction * -1,
      isStopped: false,
    });
    setCurrent(page);
    toogleNav();
  };

  return (
    <FancyNav
      initial="initial"
      animate="final"
      transition={{
        duration: 0.8,
        bounce: 0,
        when: "beforeChildren",
        staggerChildren: 0.35,
      }}
      key="ultimateNav"
      exit={{ top: -1000 }}
      variants={variantsNav}
    >
      <ul>
        <Item
          variants={variantsItem}
          onClick={() => {
            tootleClick(0);
          }}
        >
          Home
        </Item>
        <Item
          variants={variantsItem}
          onClick={() => {
            tootleClick(1);
          }}
        >
          About me
        </Item>
        <Item
          variants={variantsItem}
          onClick={() => {
            tootleClick(2);
          }}
        >
          Skills
        </Item>
        <Item
          variants={variantsItem}
          onClick={() => {
            tootleClick(3);
          }}
        >
          Projects
        </Item>
        <Item
          variants={variantsItem}
          onClick={() => {
            tootleClick(4);
          }}
        >
          Contact
        </Item>
      </ul>
    </FancyNav>
  );
};

export default FullNav;
