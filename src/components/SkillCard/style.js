import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  height: 450px;
  width: 280px;
  border-radius: 10px;
  position: relative;

  .main--content {
    pointer-events: none;
    margin-inline: auto;
    width: 280px;
    text-align: center;
    position: relative;
    padding-top: 160px;
    .image {
      width: 140px;
      height: 140px;
      position: absolute;
      top: 30px;
      right: 70px;
      z-index: 5;
    }
    .tech--name {
      max-width: 280px;
      text-transform: uppercase;
      font-size: 55px;
      font-family: var(--inter);
      color: var(--light);
    }
  }

  .more {
    position: absolute;
    left: 65px;
    bottom: 50px;
    button {
      width: 150px;
      height: 50px;
      background-color: var(--light);
      color: var(--purple-main);
      font-family: var(--inter);
      font-size: 24px;
      border-radius: 10px;
      border: transparent;
      &:hover{
          background-color: var(--purple-main);
          color: var(--light);
      }
    }
  }
  
  .grabbing{
      position: absolute;
      bottom: 0;
      right: 0;
  }
`;
