import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const MyInfos = styled.div`
  width: 100vw;
  background-color: var(--primary-Purple);
  padding-top: 60px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const Circle = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--secondaryPurple);
  border-radius: 50%;
  width: 250px;
  height: 250px;
  .image {
    width: 80%;
    height: 80%;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  width: 80%;
  max-width: 1366px;
  margin-inline: auto;
`;

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .title--container {
    display: flex;
    gap: 10px;
    flex-direction: row;
    align-items: center;
    .circle {
      width: 20px;
      height: 20px;
      border-radius: 50%;
    }
    .blue {
      background-color: var(--darkBlue);
    }
    .purple {
        background-color: var(--secondaryPurple)
    }
    .title {
      font-size: 30px;
      font-family: var(--cinzel);
      color: var(--light);
    }
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    p {
      font-size: 16px;
      font-family: var(--firaSans);
      &:nth-child(1) {
        color: var(--black);
      }
      &:nth-child(2) {
        color: var(--light);
        mix-blend-mode: lighten;
      }
    }
  }
`;
