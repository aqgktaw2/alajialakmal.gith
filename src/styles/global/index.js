import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

import fonts from "./_fonts";
import variables from "./_variables";
import base from "./_base";
import typography from "./_typography";
import link from "./_link";
import button from "./_button";
import vendors from "./_vendors";

const GlobalStyles = createGlobalStyle`
  ${reset}

  ${fonts}

  ${variables}

  ${base}

  ${typography}

  ${link}

  ${button}

  ${vendors}

  /*
    Resources
    Svg Brand Logos
    https://iconify.design/icon-sets

    Svg Blob Shapes
    https://www.softr.io/tools/svg-shape-generator
    https://www.blobmaker.app/

    Background Patterns
    http://www.heropatterns.com/
    https://www.flaticon.com/pattern/
    https://philiprogers.com/svgpatterns/#honeycomb
    http://btmills.github.io/geopattern/

    Svg Waves
    https://getwaves.io/
  */
`;

export default GlobalStyles;
