import { createGlobalStyle } from "styled-components";
import 'sanitize.css';
import Poppins from "../fonts/Poppins/Poppins-Regular.ttf";
import PoppinsSemiBold from "../fonts/Poppins/Poppins-SemiBold.ttf";
import Lora from "../fonts/Lora/Lora-VariableFont_wght.ttf";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Poppins';
    src: url(${Poppins}) format('truetype');
    src: url(${PoppinsSemiBold}) format('truetype');
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
    * {
        box-sizing: border-box;
    }
    
    html {
        font-family: 'Poppins', Fallback, sans-serif;
        font-size: 16px;
    }
    a {
        text-decoration:none;
    }
    h1, h2 {
        font-weight: 600;
        margin:0;
    }
    h1 {
        font-size: 4.375rem;
    }
    h2 {
        font-size: 2.5rem;
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
