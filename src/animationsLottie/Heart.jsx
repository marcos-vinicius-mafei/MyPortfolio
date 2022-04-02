import { useState } from "react";
import Lottie from "react-lottie";
import * as animationData from "../animation/heart.json";

const Heart = ({size,...rest}) => {
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
    <div {...rest}>
      <Lottie
        speed={0.4}
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

export default Heart;