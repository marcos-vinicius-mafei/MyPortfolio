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

  const toogleLottieAndPages = () => {
    history.push("/");
    setLottieProps({
      ...lottieProps,
      direction: lottieProps.direction * -1,
      isStopped: false,
    });
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
            setCurrent(0);
            toogleLottieAndPages();
            window.scrollTo("#Start", { behavior: "smooth" });
            toogleNav();
          }}
        >
          Home
        </Item>
        <Item
          variants={variantsItem}
          onClick={() => {
            setCurrent(1);
            toogleLottieAndPages();
            window.scrollTo("#About", { behavior: "smooth" });
            toogleNav();
          }}
        >
          About me
        </Item>
        <Item
          variants={variantsItem}
          onClick={() => {
            setCurrent(2);
            toogleLottieAndPages();
            window.scrollTo("#Skills", { behavior: "smooth" });
            toogleNav();
          }}
        >
          Skills
        </Item>
        <Item
          variants={variantsItem}
          onClick={() => {
            setCurrent(3);
            toogleLottieAndPages();
            window.scrollTo("#Projects", { behavior: "smooth" });
            toogleNav();
          }}
        >
          Projects
        </Item>
        <Item
          variants={variantsItem}
          onClick={() => {
            toogleLottieAndPages();
            setCurrent(4);
            window.scrollTo("#Contact", { behavior: "smooth" });
            toogleNav();
          }}
        >
          Contact
        </Item>
      </ul>
    </FancyNav>
  );
};

export default FullNav;
