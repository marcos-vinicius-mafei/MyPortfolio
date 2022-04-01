import { useState } from "react";
import Lottie from "react-lottie";
import * as animationData from "../animation/hamburger-icon.json";

const Hamburger = () => {
  const [lottieProps, setLottieProps] = useState({
    isStopped: true,
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
      className="button--burguer"
      onClick={() => {
        setLottieProps({ ...lottieProps, direction: lottieProps.direction * -1, isStopped: false });
      }}
    >
      <Lottie
        speed={2}
        options={defaultOptions}
        height={35}
        width={35}
        isStopped={lottieProps.isStopped}
        isPaused={lottieProps.isPaused}
        direction={lottieProps.direction}
      />
    </div>
  );
};

export default Hamburger;
