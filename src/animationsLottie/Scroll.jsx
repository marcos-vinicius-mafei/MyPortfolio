import { useState } from "react";
import Lottie from "react-lottie";
import * as animationData from "../animation/scrollDown.json";
import {motion} from "framer-motion"

const Scroll = ({width,height,...rest}) => {
  const [lottieProps, setLottieProps] = useState({
    isStopped: false,
    isPaused: false,
    direction: 1,
  });

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <motion.div {...rest} initial={{opacity: 0,y:"50px"}}
    animate={{opacity:1,y: 0}}
    transition={{duration: 1.2}}>
      <Lottie
        speed={0.4}
        options={defaultOptions}
        height={height}
        width={width}
        isStopped={lottieProps.isStopped}
        isPaused={lottieProps.isPaused}
        direction={lottieProps.direction}
      />
    </motion.div>
  );
};

export default Scroll;