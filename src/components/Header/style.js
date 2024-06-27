import styled from "styled-components";

export const FancyHeader = styled.header`
  width: 100vw;
  top: 0;
  position: absolute;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
  div.header--container {
    width: 90%;
    max-width: 1366px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      font-family: var(--lobster);
      font-weight: 500;
      font-size: 30px;
      color: var(--white);
      filter: brightness(1.5);
    }
    div.header--mini--container {
      display: flex;
      align-items: center;
      gap: 65px;
      div.header--icons {
        display: none;
        .icons {
          color: var(--white);
          width: 30px;
          height: 30px;
          &:hover {
            filter: brightness(0.7);
          }
        }
        @media screen and (min-width: 768px) {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 160px;
        }
      }
      .position {
        width: 65px;
        height: 65px;
        position: relative;
      }
      div.button--burguer {
        position: fixed;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: 65px;
        height: 65px;
        cursor: pointer;
      }
    }
  }
`;
