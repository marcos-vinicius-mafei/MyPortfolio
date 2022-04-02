import { useState } from "react";
import Lottie from "react-lottie";
import * as animationData from "../animation/grabbing.json";

const Grabbing = ({ toogleNav, showNav }) => {
  const [lottieProps, setLottieProps] = useState({
    isStopped: false,
    isPaused: false,
    direction: 1,
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="grabbing">
      <Lottie
        speed={1}
        options={defaultOptions}
        height={50}
        width={50}
        isStopped={lottieProps.isStopped}
        isPaused={lottieProps.isPaused}
        direction={lottieProps.direction}
      />
    </div>
  );
};

export default Grabbing;
