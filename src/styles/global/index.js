import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

import fonts from "./fonts";
import variables from "./variables";
import base from "./base";
import typography from "./typography";
import link from "./link";
import button from "./button";

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

  /* --------------- LINK --------------- */
  ${link}

  /* --------------- BUTTON --------------- */
  ${button}
`;

export default GlobalStyles;
