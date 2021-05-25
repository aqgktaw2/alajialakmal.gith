import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

import fonts from "./fonts";
import variables from "./variables";
import base from "./base";
import typography from "./typography";

const GlobalStyles = createGlobalStyle`
  /* --------------- RESET CSS --------------- */
  ${reset}

  /* --------------- FONTS --------------- */
  ${fonts}

  /* --------------- VARIABLES --------------- */
  ${variables}

  /* --------------- BASE --------------- */
  ${base}

  /* --------------- TYPOGRAPHY --------------- */
  ${typography}
`;

export default GlobalStyles;
