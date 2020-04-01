import {
    createGlobalStyle
} from 'styled-components';
import Poppins from '../fonts/Poppins/Poppins-Regular.ttf'
import Lora from '../fonts/Lora/Lora-VariableFont_wght.ttf'

const GlobalStyle = createGlobalStyle `
@font-face {
    font-family: 'Poppins';
    src: url(${Poppins}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Lora';
    src: url(${Lora}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }

    html {
        font-family: 'Poppins';
        font-size: 17px;
    }
    a {
        text-decoration:none;
    }

    @media (max-width: 900px) {
     html { font-size: 15px; }
    }

    @media (max-width: 400px) {
     html { font-size: 13px; }
    }


  p {
      font-size: 1em;
  }

`;

export default GlobalStyle;