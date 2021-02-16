import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-size: 1rem;
        line-height: 1.5;
        color: green;
        overflow-x: hidden;
    }

`;

export default GlobalStyle;
