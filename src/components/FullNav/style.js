import styled from "styled-components";
import { motion } from "framer-motion";

export const FancyNav = styled(motion.div)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  inset: 0;
  z-index: -1;
  background-color: var(--secondaryPurple);
  display: flex;
  align-items: center;
  justify-content: center;
  ul {
    display: flex;
    flex-direction: column;
    gap: 70px;
    list-style: none;
    align-items: center;
    li {
      color: var(--white);
      font-size: 30px;
      font-family: var(--cinzel);
      a {
        color: var(--white);
        &:hover {
          color: var(--primary-Purple);
        }
      }
    }
    @media screen and (min-width: 768px) {
      margin-top: 30px;
      li {
        font-size: 40px;
      }
    }
    @media screen and (min-width: 1000px) {
      margin-top: 60px;
      li {
        font-size: 50px;
      }
    }
  }
`;
