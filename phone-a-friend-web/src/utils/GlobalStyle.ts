import { createGlobalStyle } from 'styled-components';
import 'sanitize.css';
import Poppins from '../fonts/Poppins/Poppins-Regular.ttf';
import PoppinsSemiBold from '../fonts/Poppins/Poppins-SemiBold.ttf';
import Lora from '../fonts/Lora/Lora-VariableFont_wght.ttf';

const GlobalStyle = createGlobalStyle`
    :root {
        --button-font: 1.125rem;
        --mobile-button-font: 1.875rem;
    }
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
    /* div {
        border: 1px solid black;
    } */
    
    html {
        font-family: 'Poppins', Fallback, sans-serif;
        font-size:  16px
        ;
          /* border-box box model allows us to add padding and border to our elements without increasing their size */
        box-sizing: border-box;
    }
    body {

    /* min-height: calc(100vh - 100px); */
  /* margin: 50px; */
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
        /* white-space: break-spaces; */
    }
    .center-text {
        text-align: center;
    }
    .top-nav-button {
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 0;
    }

    .splash-intro-button, .mobile-splash-intro-button {
        font-weight: 600;
        letter-spacing: 0;
        color: #13273E;
    }

    .splash-intro-button {
        font-size: var(--button-font);
        width: 256px;  
    }
    .mobile-splash-intro-button {
        font-size: var(--mobile-button-font);
        width: 96vw;  
    }

    .intro-button {
        font-size: var(--button-font);
        width: 256px;  
    }
    .mobile-intro-button {
        font-size: var(--mobile-button-font);
        width:100%;
    }
    .button-font {
        font-size: var(--button-font);
        font-weight: 600;
        font-family: Poppins;
    }




  p {
      font-size: 1em;
  }

`;

export default GlobalStyle;
