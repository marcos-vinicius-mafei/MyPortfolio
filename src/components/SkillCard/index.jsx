import { useMotionValue, useTransform, motion } from "framer-motion";
import { Container } from "./style";
import backgroundCard from "../../images/backgroundCard.png"
import Grabbing from "../../animationsLottie/Grabbing";

const SkillCard = ({ image, text, url }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <div style={{ perspective: 2000 }}>
      <Container
        style={{ x, y, rotateX, rotateY, z: 100 ,backgroundImage: `url(${backgroundCard})`}}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div className="main--content" style={{ x, y, z: 1 }}>
          <motion.img
            className="image"
            src={image}
            alt="text"
            style={{ x, y, rotateX, rotateY, z: 100000 }}
            drag
            dragElastic={0.12}
            whileTap={{ cursor: "grabbing" }}
          />
          <motion.h3
            style={{ z: 1 }}
            drag
            dragElastic={0.12}
            whileTap={{ cursor: "grabbing" }}
            className="tech--name"
          >
            {text}
          </motion.h3>
        </motion.div>
        <div className="more">
          <a href={url} rel="noopener noreferrer" target="_blank">
            <button>Learn more</button>
          </a>
        </div>
        <Grabbing className="grabbing"/>
      </Container>
    </div>
  );
};

export default SkillCard;
