import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  .scroll{
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .big{
    display: none;
  }
  @media screen and (min-width:768px){
    .big{
      display: block
    }
    .mini{
      display: none;
    }
  }
`;

export const MyInfos = styled.div`
  width: 100vw;
  background-color: var(--primary-Purple);
  padding-top: 65px;
  padding-bottom: 65px;
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media screen and (min-width: 900px){
    gap: 120px;
  }
`;

export const Circle = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--secondaryPurple);
  border-radius: 50%;
  width: 280px;
  height: 280px;
  .image {
    width: 80%;
    height: 80%;
  }
  .blue--circle {
    width: 80%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--darkBlue);
    border-radius: 50%;
    .computer {
      width: 100%;
    }
  }

  @media screen and (min-width: 900px) {
    width: 350px;
    height: 350px;
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
  @media screen and (min-width: 900px) {
    flex-direction: ${(props) =>
      props.reverse === "reverse" ? "row-reverse" : "row"};
    justify-content: space-between;
  }
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
      background-color: var(--secondaryPurple);
    }
    .title {
      font-size: 30px;
      font-family: var(--cinzel);
      color: var(--light);
    }
    @media screen and (min-width: 1200px) {
      .circle{
        width: 30px;
        height: 30px;
      }
      .title{
        font-size: 38px;
      }
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
    @media screen and (min-width: 1200px) {
      p{
        font-size: 25px;
      }
    }
  }
  @media screen and (min-width: 900px) {
    width: 50%;
  }
`;
