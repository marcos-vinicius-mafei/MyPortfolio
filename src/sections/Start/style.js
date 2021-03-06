import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 1366px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  height: 100%;
  justify-content: center;
  gap: 50px;
  .mini--titles {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    h4 {
      font-size: 20px;
      font-family: var(--firaSans);
    }
    .dev {
      color: var(--primary-Purple);
    }
    .and {
      color: var(--light);
    }
    .engineer {
      color: var(--purple-main);
    }
    @media screen and (min-width: 900px) {
      flex-direction: row;
      gap: 30px;
    }
  }
  .circle--computer {
    width: 280px;
    height: 280px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: var(--primary-Purple);
    .second--circle {
      width: 85%;
      height: 85%;
      border-radius: 50%;
      background-color: var(--darkBlue);
    }
    div.image--holder {
      user-select: none;
      pointer-events: none;
    }
    img {
      user-select: none;
      top: 45px;
      right: 15px;
      position: absolute;
      width: 250px;
      z-index: 9000;
    }
    div.grabbing {
      position: absolute;
      right: 110px;
      bottom: 0;
      z-index: 8000;
    }
  }
  @media screen and (min-width: 600px) {
    div.circle--wrapper{
      align-self: end;
    }
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top:0;
    div.circle--wrapper{
      align-self: center;
    }
  }
  @media screen and (min-width: 1000px) {
    .circle--computer {
      width: 400px;
      height: 400px;
      img {
        right: 40px;
        width: 350px;
      }
      div.grabbing {
        right: 165px;
        bottom: 20px;
      }
    }
  }
  @media screen and (min-width: 1300px) {
    .circle--computer {
      width: 500px;
      height: 500px;
      img {
        width: 450px;
      }
      div.grabbing {
        right: 210px;
        bottom: 40px;
      }
    }
  }
`;

export const Infos = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .title {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: flex-start;
    h1 {
      font-family: var(--cinzelDecorative);
      font-size: 30px;
      color: var(--light);
      width: 290px;
      line-height: 40px;
    }
    img {
      width: 240px;
    }
  }
  @media screen and (min-width:600px){
    align-self: start;
  }
  @media screen and (min-width: 768px) {
    align-self:center;
    align-items: flex-start;
    gap: 20px;
    .title {
      gap: 20px;
    }
  }
  @media screen and (min-width: 1000px) {
    .title {
      h1 {
        font-size: 50px;
        line-height: 60px;
        width: 400px;
      }
      img {
        width: 300px;
      }
    }
  }
  @media screen and (min-width: 1300px) {
    gap: 30px;
    .title {
      h1 {
        font-size: 55px;
        line-height: 60px;
        width: 600px;
      }
      img {
        width: 350px;
      }
    }
  }
  @media screen and (min-width: 1500px) {
    gap: 30px;
    .title {
      h1 {
        font-size: 70px;
        line-height: 80px;
        width: 650px;
      }
      img {
        width: 390px;
      }
    }
  }
`;
