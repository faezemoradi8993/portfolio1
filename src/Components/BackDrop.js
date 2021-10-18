import React from 'react'
import styled from 'styled-components'


const BackDrop = ({ toggle, setToggle }) => {
    return (
        <BackDropStyle className={toggle ? "nav-toggle" : ""} onClick={() => setToggle(false)}>
        </BackDropStyle>
    )
}
const BackDropStyle = styled.div`
    transition: all 0.5s ease ;
    z-index: 800;
    position: fixed;
    left:0 ;
    top: 0;
    transform: translateX(-100%);
    width: 100vw;
    height: 100vh;
    opacity: .3;
    background: var(--primery-color);
    backdrop-filter: blur( 20px );
    -webkit-backdrop-filter: blur( 4px );
`
export default BackDrop
