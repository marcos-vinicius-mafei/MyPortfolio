import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  position: fixed;
  bottom: 15px;
  left: 50%;
  margin-left: -47.5%;
  display: flex;
  width: 95%;
  justify-content: space-between;
  .circle--button {
    width: 60px;
    height: 60px;
    background-color: var(--midBlue);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #9d4edd;
    box-sizing: border-box;
    box-shadow: 0px 0px 5px 4px rgba(157, 78, 221, 0.5);
    cursor: pointer;
    .icons {
      color: var(--light);
      width: 50%;
      height: 50%;
    }
  }

  .arrow--up{
      transform: rotate(90deg);
  }
`;
