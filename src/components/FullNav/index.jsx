import { FancyNav } from "./style";
import Item from "./Item";

const FullNav = ({ setCurrent, toogleNav, setLottieProps, lottieProps }) => {
  const variantsNav = {
    initial: { top: -1000 },
    final: { top: 0 },
  };

  const variantsItem = {
    initial: { opacity: 0, marginRight: 150 },
    final: { opacity: 1, marginRight: 0 },
  };

  const toogleLottie = () => {
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
            toogleLottie();
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
            toogleLottie();
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
            toogleLottie();
            window.scrollTo("#Start", { behavior: "smooth" });
            toogleNav();
          }}
        >
          Skills
        </Item>
        <Item
          variants={variantsItem}
          onClick={() => {
            setCurrent(3);
            toogleLottie();
            window.scrollTo("#Projects", { behavior: "smooth" });
            toogleNav();
          }}
        >
          Projects
        </Item>
        <Item
          variants={variantsItem}
          onClick={() => {
            setCurrent(4);
            toogleLottie();
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
