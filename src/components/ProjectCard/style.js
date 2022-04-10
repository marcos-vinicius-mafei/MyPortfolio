import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 280px;
  align-items: center;
  .containers {
    display: flex;
    align-items: center;
    width: 80%;
    height: 250px;
  }
  .image {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: var(--secondaryPurple);
    justify-content: center;
    img {
      width: 90%;
      @media screen and (min-width: 560px) {
        width: 60%;
      }
      @media screen and (min-width: 768px) {
        width: 90%;
        max-width: 380px;
      }
      @media screen and (min-width: 1300px) {
        max-width: 450px;
        width: 450px;
      }
    }
  }
  .infos {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: var(--light);
    flex-direction: column;
    padding-top: 15px;
    justify-content: space-between;
    h4 {
      color: var(--primary-Purple);
      font-size: 20px;
      font-family: var(--cinzel);
    }
    p {
      width: 90%;
      font-size: 15px;
      font-weight: bold;
      font-family: var(--inter);
    }
    .buttons {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 20px;
      button {
        width: 100px;
        height: 30px;
        border-radius: 5px;
        color: var(--light);
        border: transparent;
        font-family: var(--firaSans);
      }
      .code {
        background-color: var(--darkBlue);
      }
      .site {
        background-color: var(--primary-Purple);
      }
    }
  }
  @media screen and (min-width: 768px) {
    flex-direction: ${(props) =>
      props.type === "normal" ? "row" : "row-reverse"};
    justify-content: center;
    width: 600px;
    .containers {
      width: 50%;
      height: 300px;
    }
    .image {
      border-top-right-radius: ${(props) =>
        props.type === "normal" ? 0 : "5px"};
        border-bottom-right-radius: ${(props) =>
        props.type === "normal" ? 0 : "5px"};
      border-bottom-left-radius: ${(props) =>
        props.type === "normal" ? "5px" : 0};
      border-top-left-radius: ${(props) =>
        props.type === "normal" ? "5px" : 0};
    }
    .infos {
      border-top-right-radius: ${(props) =>
        props.type === "normal" ? "5px" : 0};
      border-bottom-left-radius: ${(props) =>
        props.type === "normal" ? 0 : "5px"};
      border-top-left-radius: ${(props)=>props.type === "normal"? 0 : "5px"};
      border-bottom-right-radius: ${(props)=>props.type === "normal"? "5px" : 0};
      padding: 0;
      justify-content: space-around;
    }
  }
  @media screen and (min-width: 950px) {
    width: 750px;
    .containers {
      height: 350px;
    }
    .infos {
      h4 {
        font-size: 30px;
      }
      p {
        font-size: 20px;
      }
      .buttons {
        button {
          width: 150px;
          height: 35px;
          font-size: 20px;
        }
      }
    }
  }
  @media screen and (min-width: 1300px) {
    width: 1000px;
    .containers {
      height: 400px;
    }
    .infos {
      h4 {
        font-size: 35px;
      }
      p {
        font-size: 24px;
      }
      .buttons {
        gap: 20px;
        button {
          height: 45px;
        }
      }
    }
  }
`;
