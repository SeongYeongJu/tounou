import { createGlobalStyle } from "styled-components";
import MontserratVariableFontWght from "./assets/fonts/Montserrat-VariableFont_wght.ttf";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0; 
        padding: 0; 
        @font-face {
        font-family: 'Montserrat-VariableFont_wght';
        src: local('Montserrat-VariableFont_wght'), local('Montserrat-VariableFont_wght');
        font-style: normal;
        src: url(${MontserratVariableFontWght}) format('truetype');
  }
        font-family: 'Montserrat-VariableFont_wght';
    }
`;
