import { FancyNav } from "./style";
import Item from "./Item";
import {Link} from "react-router-dom"

const FullNav = () => {
  const variantsNav = {
    initial: { top: -1000 },
    final: { top: 0 },
  };

  const variantsItem = {
    initial: { opacity: 0, marginRight: 150 },
    final: { opacity: 1, marginRight: 0 },
  };

  return (
    <FancyNav
      initial="initial"
      animate="final"
      transition={{
        duration: 0.8,
        bounce: 0,
        when: "beforeChildren",
        staggerChildren: 0.2,
      }}
      key="ultimateNav"
      exit={{ top: -1000 }}
      variants={variantsNav}
    >
      <ul>
        <Item variants={variantsItem}><Link to={"/#icon"}>Home</Link></Item>
        <Item variants={variantsItem}><Link>About me</Link></Item>
        <Item variants={variantsItem}><Link>Skills</Link></Item>
        <Item variants={variantsItem}><Link>Projects</Link></Item>
        <Item variants={variantsItem}><Link>Contact</Link></Item>
      </ul>
    </FancyNav>
  );
};

export default FullNav;
