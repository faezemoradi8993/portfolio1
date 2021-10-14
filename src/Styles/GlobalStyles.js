import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`
 :root{
     --background-lite-color:#f1f1f1;
     --background-dark-color:#10121a;
     --background-dark-color-2:#030f20;
     --background-dark-color-3:#181022;
     --background-dark-color-4:#333;
     --primery-color:#007bff;
     --secondary-color:#6c757d;
     --thirdary-color:#8a6b8b;
     --border-color:#2e344e;
     --white-color:#fff;
     --font-light-color:#a4acc4;
     --font-dark-color:#313131;
     --font-dark-color-2:#151515;

 }
 *{
    -webkit-tap-highlight-color: transparent;
     margin:0;
     padding:0;
     box-sizing:border-box;
     list-style:none;
     text-decoration: none;
     font-family: 'Nunito', sans-serif;
     font-size: 1.1rem;
 }
 body{
     background-color:var(--background-dark-color);
 }
 `
export default GlobalStyle;