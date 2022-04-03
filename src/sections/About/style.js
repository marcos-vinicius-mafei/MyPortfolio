import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  width: 90%;
  max-width: 1366px;
  margin-top: 100px;
  margin-inline: auto;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 50px;
  .circles--wrapper {
    display: none;
  }
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
    margin-top: 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    .infos--main {
      display: flex;
      .title {
        h1 {
          width: 300px;
        }
      }
    }
    .mini--container {
      gap: 30px;
    }
  }
  @media screen and (min-width: 768px) {
    .infos--main {
      display: flex;
      .title {
        h1 {
          width: fit-content;
        }
      }
    }
  }
  @media screen and (min-width: 1000px) {
    .circles--wrapper {
      display: block;
      position: relative;
      width: 500px;
      height: 500px;
      .circle1 {
        top: 20px;
        left: -50px;
      }
      .circle2 {
        top: 120px;
        left: 135px;
      }
      .circle3 {
        top: 220px;
        right: 0;
      }
    }
  }
  @media screen and (min-width: 1300px) {
    .mini--container {
      h4 {
        width: 400px;
        font-size: 30px;
      }
    }
    .circles--wrapper {
      .circle1 {
        top: 20px;
        left: -150px;
      }
      .circle2 {
        top: 160px;
        left: 70px;
      }
      .circle3 {
        top: 300px;
        right: 0;
      }
    }
  }
`;

export const Card = styled(motion.div)`
  position: relative;
  border-radius: 5px;
  width: 280px;
  height: 280px;
  display: flex;
  align-items: end;
  justify-content: center;
  background-color: var(--secondaryPurple);
  .icons {
    color: var(--darkBlue);
    position: absolute;
    width: 50px;
    height: 50px;
  }
  .controller {
    top: 55px;
    left: 10px;
  }
  .dog {
    top: 55px;
    right: 10px;
  }
  .code {
    top: 20px;
    right: 41%;
  }
  .hearts {
    position: absolute;
  }
  .bigHearts {
    display: none;
  }
  .heart1 {
    top: 90px;
    left: 45px;
  }
  .heart2 {
    top: 90px;
    right: 45px;
  }
  .heart3 {
    top: 60px;
  }
  .infos {
    position: absolute;
    left: 10px;
    top: 260px;
  }
  img.myPhoto {
    margin-bottom: 20px;
    width: 138px;
    height: 138px;
  }
  @media screen and (min-width: 600px) {
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
    display: none;
    width: 550px;
    height: 340px;
    .icons {
      width: 70px;
      height: 70px;
    }
    .controller {
      top: 170px;
      left: 40px;
    }
    .dog {
      top: 170px;
      right: 40px;
    }
    .code {
      top: 15px;
      right: 43%;
    }
    .hearts {
      display: none;
    }
    .bigHearts {
      display: block;
      position: absolute;
    }
    .heart1 {
      top: 150px;
      left: 120px;
    }
    .heart2 {
      top: 150px;
      right: 120px;
    }
    .heart3 {
      top: 60px;
    }
    img.myPhoto {
      margin-bottom: 55px;
    }
  }
  @media screen and (min-width: 1500px) {
    width: 750px;
    height: 500px;
    .icons {
      width: 90px;
      height: 90px;
    }
    .controller {
      top: 260px;
      left: 40px;
    }
    .dog {
      top: 260px;
      right: 40px;
    }
    .code {
      top: 15px;
      right: 43%;
    }
    .heart1 {
      top: 250px;
      left: 150px;
    }
    .heart2 {
      top: 250px;
      right: 150px;
    }
    .heart3 {
      top: 100px;
    }
    img.myPhoto {
      width: 200px;
      height: 200px;
      margin-bottom: 90px;
    }
  }
`;

export const Circle = styled(motion.div)`
  display: none;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 180px;
  background-color: var(--primary-Purple);
  border-radius: 50%;
  .blue--circle {
    width: 80%;
    height: 80%;
    background-color: var(--darkBlue);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    .icon--wrapper {
      position: relative;
      .absolute--hearts {
        position: absolute;
        top: 10px;
      }
      .icons {
        width: 50px;
        height: 50px;
        color: var(--light);
      }
    }
  }

  @media screen and (min-width: 1000px) {
    display: flex;
    position: absolute;
  }
  @media screen and (min-width: 1300px) {
    width: 210px;
    height: 210px;
  }
`;
