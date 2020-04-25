import { createGlobalStyle } from 'styled-components';
import 'sanitize.css';
import Poppins from '../fonts/Poppins/Poppins-Regular.ttf';
import PoppinsSemiBold from '../fonts/Poppins/Poppins-SemiBold.ttf';
import Lora from '../fonts/Lora/Lora-VariableFont_wght.ttf';

const GlobalStyle = createGlobalStyle`
    :root {
        --button-font: 1.125rem;
        --mobile-button-font: 1rem;
        --headline-font-size: 4.375rem;
        --headline-mobile-font-size:2.344rem;
        --dark-blue:#0D2138;
        --default-headline-color: var(--dark-blue);
        --copy-blue: #13273E;
        --default-font-color: var(--copy-blue);
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
    h1, h2 {
        color: var(--default-headline-color);
    }
    p {
        color: var(--default-font-color);
    }

    a {
        text-decoration:none;
    }
    .font-headline, .font-mobile-headline {
        font-weight: 600;
        margin:0;
        letter-spacing: 0.035rem;
    }
    .font-headline {
        font-size: var(--headline-font-size);
        line-height: 4.125rem;
    }
    .font-mobile-headline {
        font-size: var(--headline-mobile-font-size);
        line-height: 5.625rem;
    }
    .center-text {
        text-align: center;
    }
    .top-nav-button {
        font-size: var(--button-font);
        font-weight: 500;
        letter-spacing: 0;
    }

    .splash-intro-button, .mobile-splash-intro-button {
        font-weight: 600;
        letter-spacing: 0;
    }

    .splash-intro-button {
        font-size: var(--button-font);
        width: 256px;  
    }
    .mobile-splash-intro-button, .mobile-intro-button {
        font-size: var(--mobile-button-font);
        width: 96vw;  
    }

    .intro-button {
        font-size: var(--button-font);
        width: 256px;  
    }
    .button-font {
        font-size: var(--button-font);
        font-weight: 600;
    }


`;

export default GlobalStyle;
