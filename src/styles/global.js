import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    :root{
        --darkBlue:#051C37;
        --darkColor:#1A1A28;
        --primary-Purple: #7562E0;
        --secondaryPurple: #282162;
        --light:#F5F5F5;
        --white: #fff;
        --black: #000;
        --cleanBlack: #222;
        --purple-main: #9D4EDD;
        --midBlue: #26384E;
        --cinzel: 'Cinzel', serif;
        --cinzelDecorative: 'Cinzel Decorative', cursive;
        --firaSans: 'Fira Sans', sans-serif;
        --inter:'Inter', sans-serif;
        --lobster: 'Lobster', cursive;
    }

    ::-webkit-scrollbar {
        width: 12px;
    }
    ::-webkit-scrollbar-track {
        background: var(--midBlue);
    }
    ::-webkit-scrollbar-thumb {
        background: #414F60; 
        border-radius: 10px;
    }

    body {
        background-color: var(--darkBlue);
        font-size: 12px;
        font-family: var(--inter);
        overflow-x: hidden;
    }

    *{
        margin: 0;
        padding: 0;
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }

    img{
        pointer-events: none;
    }

`;

export default GlobalStyles;
