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
 .dark{
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
 .light{
  --background-lite-color: #f122f1;
    --background-dark-color: #d6dcf7;
    --background-dark-color-2: #cdeaf5;
    --background-dark-color-3: #181022;
    --background-dark-color-4: #2f093f;
    --primery-color: #3b217a;
    --secondary-color: #345068;
    --thirdary-color: #8a6b8b;
    --border-color: #727dba;
    --white-color: #000;
    --font-light-color: #030409;
    --font-dark-color: #2b073b;
    --font-dark-color-2: #a49f9f;
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
     //custom scrollbar
     /* width */
      &::-webkit-scrollbar {
        width: 5px;
      }

      /* Track */
      &::-webkit-scrollbar-track {
        background: var(--background-dark-color-2);
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: var(--border-color);
        border-radius: 10px;
      }

      /* Handle on hover */
      &::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
 }


//mainContent 
/* .mainContent-toggle-nav{
  overflow: hidden;
  height: 100vh;
  transition: all 0.5s ease;
} */

 //nav toggle
 .nav-toggle{
    transform: translateX(0)!important;
    transition: all 0.5s ease ;
}
//menu-icon
.menu-mobile{
  display: none;
  position: fixed;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  top: 2rem;
  right: 2rem;
  z-index: 100000;
  background-color: var(--background-dark-color);
  border-radius: 4px;
  opacity: .5;
  transition: all .2s ease;
  &:hover{
    opacity: 1;
    transition: all .3s ease;
  }
  svg{
    font-size: 3rem;
  }
  @media screen and (max-width:1200px){
    display: flex;    
}
@media screen and (max-width:600px){    
      right: .7rem;
}

}
 `
export default GlobalStyle;