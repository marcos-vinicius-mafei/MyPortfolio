import { useState } from "react";
import Lottie from "react-lottie";
import * as animationData from "../animation/paper-plane.json";

const PaperPlane = ({size,...rest}) => {
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
    <div {...rest}>
      <Lottie
        speed={0.8}
        options={defaultOptions}
        height={size}
        width={size}
        isStopped={lottieProps.isStopped}
        isPaused={lottieProps.isPaused}
        direction={lottieProps.direction}
      />
    </div>
  );
};

export default PaperPlane;