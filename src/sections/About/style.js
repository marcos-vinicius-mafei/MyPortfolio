import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  width: 90%;
  max-width: 1366px;
  margin-top: 110px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 50px;
  .infos--main {
    display: none;
  }
  .mini--container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    h4 {
      font-weight: 500;
      color: var(--light);
      width: 280px;
      font-size: 20px;
      font-family: var(--firaSans);
    }
  }
  @media screen and (min-width: 600px) {
    .mini--container {
      align-items: start;
    }
  }
  @media screen and (min-width: 768px) {
    margin-top: 150px;
    flex-direction: row;
    justify-content: space-between;
    .infos--main{
        display: flex;
        .title{
            h1{
                width: 300px;
            }
        }
    }
    .mini--container {
      gap: 30px;
    }
  }
`;

export const Card = styled(motion.div)`
  position: relative;
  border-radius: 5px;
  width: 280px;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--secondaryPurple);
  .infos {
    position: absolute;
    left: 10px;
    top: 300px;
  }
  img.myPhoto {
    width: 138px;
    height: 138px;
  }
  @media screen and (min-width: 600px) {
    align-self: start;
    .infos {
      left: 50vw;
    }
  }
  @media screen and (min-width: 768px){
      .infos{
          display: none;
      }
  }
  @media screen and (min-width: 1000px){
    width: 550px;
    height: 340px;
  }
`;
