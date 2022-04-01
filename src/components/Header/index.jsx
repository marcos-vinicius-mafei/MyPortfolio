import Hamburger from "../../animationsLottie/Hamburguer";
import { FaGithubSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FancyHeader } from "./style";

const Header = () => {
  //   const [width, setWidth] = useState("");

  //   useEffect(() => {
  //     setWidth(window.innerWidth);
  //   }, []);

  //   window.onresize = window.onload = () => {
  //     setWidth(window.innerWidth);
  //   };

  return (
    <FancyHeader>
      <div className="header--container">
        <h3>Marcos Mafei</h3>
        <div className="header--mini--container">
          <div className="header--icons">
            <a
              href="https://www.linkedin.com/in/marcosvin%C3%ADciusmafeimachado/"
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
              href="https://www.instagram.com/marcosmafei/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaInstagram className="icons" />
            </a>
          </div>
          <Hamburger />
        </div>
      </div>
    </FancyHeader>
  );
};

export default Header;
