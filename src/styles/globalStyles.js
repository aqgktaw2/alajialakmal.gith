import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyles = createGlobalStyle`
  /* --------------- RESET CSS --------------- */
  ${reset}


  /* --------------- BASE RESET --------------- */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }


  /* --------------- CUSTOM PROPERTIES --------------- */
	:root {
    --color-background: #07000b;
    --color-background-alt: #11001c;
    --color-highlight: #a30292;
    --color-highlight-alt: #6f02b0;
    --color-text: #fffafe;
    --color-text-alt: #fbf6ff;

    --transition: 0.2s ease-out;
  }

`;

export default GlobalStyles;
