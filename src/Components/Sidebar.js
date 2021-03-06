import React from 'react'
import styled from 'styled-components'
import Avatar from "Images/img (2).jpeg"
import Navigation from './Navigation'
import Switch from '@material-ui/core/Switch'


const Sidebar = ({ toggle, setToggle, theme, setTheme }) => {
    const themToggler = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark')
        // setToggle(false)
    }
    return (
        <SidebarStyle className={toggle ? "nav-toggle" : ""}>
            <div className="avatar">
                <img src={Avatar} alt="avatar" />
            </div>
            <Navigation setToggle={setToggle} />
            <div className='theme-changer-container'>
                <div className='left'>
                    <p>change theme</p>
                </div>
                <div className='right'>
                    <Switch
                        value=""
                        inputProps={{ "aria-label": '' }}
                        onClick={themToggler}
                    />
                </div>
            </div>
            <footer>
                <p>@2022 my portfolio website</p>
            </footer>
        </SidebarStyle>
    )
}
const SidebarStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 1px 1px 10px black;
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
    .theme-changer-container{
        margin: 0 auto;
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        background-color: var(--background-dark-color);
        border-radius: 30px;
        border:2px solid var(--primery-color);
        margin-bottom: .8rem;
        padding-left: .7rem;
        box-shadow: 1px 1px 10px black;
        opacity: .5;
        .right{    
        }
        .left{
            color: var(--primery-color);
            font-weight: 600;
        }
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
