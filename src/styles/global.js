import { createGlobalStyle } from "styled-components";
import segoeui from "../assets/fonts/segoeui.ttf";
export const GlobalStyle = createGlobalStyle` 

  @font-face {
    font-family: "segoeuiRegular";
    src: url(${segoeui});
  }

  * {    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    
  }
  
  #root {
      display: flex;
      align-items: center;
      justify-content: center;
  }
  
  
  html, body, #root {
      width: 100%;
  }

  body {
    background-color: #293744;
    
  }

  h1, h2, h3, p, input, button, a {
    font-family: "segoeuiRegular", Arial;
  }

  
  

`;
