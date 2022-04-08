import { useState } from "react";
import Lottie from "react-lottie";
import * as animationData from "../animation/arrows.json";

const Arrows = ({ type, ...rest }) => {
  const [lottieProps, setLottieProps] = useState({
    isStopped: false,
    isPaused: false,
    direction: -1,
  });

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      {...rest}
      onMouseOver={() => {
        setLottieProps({
          ...lottieProps,
          direction: 1,
          isStopped: false,
        });
      }}
      onMouseOut={() => {
        setLottieProps({
          ...lottieProps,
          direction: -1,
          isStopped: false,
        });
      }}
    >
      <Lottie
        speed={0.5}
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

export default Arrows;
