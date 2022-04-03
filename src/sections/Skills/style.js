import styled from "styled-components";
import { motion } from "framer-motion";

export const Circles = styled(motion.div)`
  width: 310px;
  height: 310px;
  border-radius: 50%;
  background-color: var(--primary-Purple);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .circle--blue {
    width: 85%;
    height: 85%;
    border-radius: 50%;
    background-color: var(--darkBlue);
    position: relative;
    .skills--computer {
      position: absolute;
      width: 250px;
      top: 40px;
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
    width: 400px;
    height: 400px;
    .circle--blue {
      .skills--computer {
        width: 300px;
        top: 75px;
        left: 20px;
      }
    }
  }
  @media screen and (min-width: 1300px) {
    width: 530px;
    height: 530px;
    .circle--blue {
      .skills--computer {
        width: 450px;
        top: 85px;
        left: 0px;
      }
    }
  }
`;
