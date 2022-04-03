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
      top: 60px;
      left: 6px;
    }
    .paper--plane {
      position: absolute;
      width: 200px;
      height: 200px;
      top: 40px;
      left: 20px;
      pointer-events: none;
      .mid--plane {
        display: none;
      }
      .big--plane {
        display: none;
      }
    }
  }
  .infos {
    position: absolute;
    bottom: -150px;
    left: 30px;
  }
  .contact {
    bottom: -133px;
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
      .paper--plane {
        width: 250px;
        height: 250px;
        top: 50px;
        left: 30px;
        .mini--plane {
          display: none;
        }
        .mid--plane {
          display: block;
        }
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
      .paper--plane {
        width: 350px;
        height: 350px;
        top: 70px;
        left: 25px;
        .mid--plane {
          display: none;
        }
        .big--plane {
          display: block;
        }
      }
    }
  }
`;
