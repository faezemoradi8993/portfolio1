import React from 'react'
import styled from 'styled-components'
import Avatar from "../Images/img (2).jpeg"
import Navigation from './Navigation'


const Sidebar = ({toggle, setToggle}) => {
    return (
        <SidebarStyle className={toggle?"nav-toggle":""}>
            <div className="avatar">
                <img src={Avatar} alt="avatar" />
            </div>
            <Navigation setToggle={setToggle}/>
            <footer>
                <p>@2021 my portfolio website</p>
            </footer>
        </SidebarStyle>
    )
}
const SidebarStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: .1rem solid var(--border-color);
    height: 100vh;
    position: fixed;
    width: 16.3rem;
    background-color: var(--background-dark-color-2);
    top: 0;
    left: 0;
    color: var(--secondary-color);
    z-index:900;
    transition: all 0.5s ease ;
    @media screen and (max-width:1200px){
        transform: translateX(-100%);
    }
    .avatar{
        width: 80%;
        padding: 1.5rem 0;
        display: block;
        margin: 0 auto;
        border-bottom: .1rem solid var(--border-color);
        img{
            display: block;
            margin: 0 auto;
            border-radius: 50%;
            border: .3rem solid var(--primery-color);
            object-fit: cover;
            width: 10rem;
            height: 10rem;
        }
    }
    footer{
        border-top: .1rem solid var(--border-color);
        width: 80%;
        margin:0 auto;
        padding: 1rem 0;
        p{
            text-align: center;
            display: block;
            font-size: .8rem;
            font-weight: 600;
            color: var(--border-color);
        }
    }
`
export default Sidebar
