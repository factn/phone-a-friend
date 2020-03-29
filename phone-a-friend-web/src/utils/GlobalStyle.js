import { createGlobalStyle } from 'styled-components';
import Poppins from '../fonts/Poppins/Poppins-Regular.ttf'

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Poppins';
    src: url(${Poppins}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }

  
  html {
    font-family: 'Poppins';
    font-size: 16px;
  }
`;

export default GlobalStyle;
