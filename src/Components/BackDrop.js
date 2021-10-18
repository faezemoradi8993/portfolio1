import React from 'react'
import styled from 'styled-components'

const BackDrop = ({toggle, setToggle}) => {
    return (
        <BackDropStyle className={toggle?"nav-toggle":""} onClick={()=>setToggle(false)}>
            
        </BackDropStyle>
    )
}
const BackDropStyle=styled.div`
transition: all 0.3s ease-in-out ;
z-index: 800;
position: absolute;
left:0 ;
top: 0;
transform: translateX(-100%);
width: 100vw;
height: 100vh;
background: var(--border-color);
opacity: .5;
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
`
export default BackDrop
