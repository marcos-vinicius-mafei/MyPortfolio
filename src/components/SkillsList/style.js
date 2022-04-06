import styled from "styled-components"


export const FancyList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 100px;
    li{
        list-style: none;
    }
    @media screen and (min-width: 900px){
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 900px;
        li{
            margin-bottom: 80px;
        }
    }
    @media screen and (min-width: 1000px){
        width: 1000px;
    }
    @media screen and (min-width:1300px){
        width: 1040px;
        li{
            margin-bottom:50px;
        }
    }
    @media screen and (min-width:1500px){
        width: 1366px;
        justify-content: space-between;
    }
`