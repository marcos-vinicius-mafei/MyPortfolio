import Hamburger from "../../animationsLottie/Hamburguer";
import { FaGithubSquare, FaIdBadge, FaLinkedin } from "react-icons/fa";
import { FancyHeader } from "./style";
import FullNav from "../FullNav";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Header = ({ setCurrent }) => {
  const [showNav, setShowNav] = useState(false);
  const [lottieProps, setLottieProps] = useState({
    isStopped: true,
    isPaused: false,
    direction: -1,
  });

  const toogleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <FancyHeader>
      <div className="header--container">
        <Link to={"/"}>
          <h3>Marcos Mafei</h3>
        </Link>
        <div className="header--mini--container">
          <div className="header--icons">
            <a
              href="https://www.linkedin.com/in/marcosmafei/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedin className="icons" />
            </a>
            <a
              href="https://github.com/marcos-vinicius-mafei"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithubSquare className="icons" />
            </a>
            <a
              href="https://marcos-vinicius-mafei.github.io/Resume/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaIdBadge className="icons" />
            </a>
          </div>
          <div className="position">
            <Hamburger
              toogleNav={toogleNav}
              showNav={showNav}
              lottieProps={lottieProps}
              setLottieProps={setLottieProps}
            />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {showNav && (
          <FullNav
            setCurrent={setCurrent}
            toogleNav={toogleNav}
            setLottieProps={setLottieProps}
            lottieProps={lottieProps}
          />
        )}
      </AnimatePresence>
    </FancyHeader>
  );
};

export default Header;
