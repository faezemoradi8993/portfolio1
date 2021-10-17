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
 //nav toggle
 .nav-toggle{
    transform: translateX(0)!important;
    transition: all 0.5s ease-in-out ;
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
  transition: all .2s ease-in-out;
  &:hover{
    opacity: 1;
    transition: all .3s ease-in-out;
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