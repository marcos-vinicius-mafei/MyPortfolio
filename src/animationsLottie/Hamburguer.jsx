import { useState } from "react";
import Lottie from "react-lottie";
import * as animationData from "../animation/hamburger-icon.json";

const Hamburger = ({toogleNav,showNav,lottieProps,setLottieProps}) => {

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
      style={showNav ?{backgroundColor: "var(--darkBlue)", transition:"1.7s"}:{backgroundColor: "var(--secondaryPurple)",transition:"1.7s"}}
      onClick={() => {
        setLottieProps({ ...lottieProps, direction: lottieProps.direction * -1, isStopped: false });
        toogleNav()
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
