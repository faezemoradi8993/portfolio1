import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import styled from "styled-components"
import { Route, Switch } from 'react-router';
import HomePage from './Pages/HomePage';
import Portfolios from './Pages/Portfolios';
import Contact from './Pages/Contact';
import ResumePage from './Pages/ResumePage';
import Blogs from './Pages/Blogs';
import About from './Pages/About';
import MenuIcon from '@material-ui/icons/Menu';
import  Backdrop  from './Components/BackDrop';

function App() {
  const [navToggle, setNavToggle] = useState(false)
  return (
    <AppStyled>
       <Backdrop  toggle={navToggle} setToggle={setNavToggle} />
       <Sidebar toggle={navToggle} setToggle={setNavToggle} /> 
      <div className='menu-mobile' onClick={() => setNavToggle(!navToggle)}>
        <MenuIcon />
      </div>
      <MainContentStyled >
        <ul className="lines">
          <li className="line"></li>
          <li className="line"></li>
          <li className="line"></li>
          <li className="line"></li>
        </ul>
        <Switch>
          <Route path="/" exact>{HomePage}</Route>
          <Route path="/about" exact>{About}</Route>
          <Route path="/resume" exact>{ResumePage}</Route>
          <Route path="/contact" exact>{Contact}</Route>
          <Route path="/portfolios" exact>{Portfolios}</Route>
          <Route path="/blogs" exact>{Blogs}</Route>
        </Switch>
      </MainContentStyled>
    </AppStyled>
  );
}

const AppStyled = styled.div`
color: var(--font-light-color);
`
const MainContentStyled = styled.main`
overflow: ${navToggle => navToggle ? 'hidden' : 'auto'};
height: ${navToggle => navToggle ? '100vh' : '100%'};
width: calc(100vw - 17rem);
min-height: 100vh;
margin: 0 0 0 auto;
position: relative;
@media screen and (max-width:1200px){
      width: 100vw;
}

.lines{
width: 100%;
height: 100%;
min-height: 100vh;
display: flex;
justify-content: space-evenly;
position: absolute;
z-index: -1;
.line{
  opacity: 30%;
  width: 1px;
  min-height: 100vh;
  height: 100%;
  background-color: var(--border-color);
}
}
`
export default App;