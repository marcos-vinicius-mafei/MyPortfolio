import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  display: none;
  width: 500px;
  height: 500px;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media screen and (min-width: 1000px) {
    display: flex;
  }
`;

export const Circles = styled(motion.div)`
  width: 310px;
  height: 310px;
  border-radius: 50%;
  background-color: var(--primary-Purple);
  position: relative;
  display: ${(props) => (props.display === "none" ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  .circle--blue {
    width: 85%;
    height: 85%;
    border-radius: 50%;
    background-color: var(--darkBlue);
    position: relative;
    .project--computer {
      position: absolute;
      width: 250px;
      top: 70px;
      left: 6px;
    }
    .project--big--computer {
      position: absolute;
      width: 250px;
      top: 70px;
      left: 6px;
    }
  }
  .infos {
    position: absolute;
    bottom: -150px;
    left: 30px;
  }
  @media (min-width: 600px) {
    align-self: start;
    .infos {
      left: 50vw;
    }
  }
  @media screen and (min-width: 768px) {
    align-self: center;
    .infos {
      display: none;
    }
  }
  @media screen and (min-width: 1000px) {
    width: ${(props) => (props.display === "none" ? "300px" : "350px")};
    height: ${(props) => (props.display === "none" ? "300px" : "350px")};
    position: absolute;
    right: ${(props) => (props.display === "none" ? "0px" : "200px")};
    top: ${(props) => (props.display === "none" ? "0px" : "200px")};
    display: ${(props) => (props.display === "initial" ? "none" : "flex")};
  }
  @media screen and (min-width: 1300px) {
    width: ${(props) => (props.display === "none" ? "330px" : "400px")};
    height: ${(props) => (props.display === "none" ? "330px" : "400px")};
    right: ${(props) => (props.display === "none" ? "0px" : "220px")};
    .circle--blue {
      .project--computer {
        width: 280px;
        top: 70px;
        left: 5px;
      }
      .project--big--computer {
        width: 350px;
        top: 50px;
        left: -35px;
      }
    }
  }
`;
