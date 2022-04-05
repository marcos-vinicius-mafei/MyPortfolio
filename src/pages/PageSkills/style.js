import styled from "styled-components"

export const SkillsContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--primary-Purple);
    padding-top: 50px;
    padding-bottom: 50px;
    .title {
        font-size: 30px;
        font-family: var(--cinzel);
        color: var(--light);
        @media screen and (min-width: 900px){
            font-size: 45px;
        }
    }
`