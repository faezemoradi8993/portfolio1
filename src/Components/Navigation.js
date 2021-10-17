import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = ({ setToggle }) => {
    return (
        <NavigationStyle>
            <li>
                <NavLink to="/" activeClassName="active-class" exact onClick={() => setToggle(false)}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" activeClassName="active-class" exact onClick={() => setToggle(false)} >about</NavLink>
            </li>
            <li>
                <NavLink to="/resume" activeClassName="active-class" exact onClick={() => setToggle(false)} >Resume</NavLink>
            </li>
            <li>
                <NavLink to="/portfolios" activeClassName="active-class" exact onClick={() => setToggle(false)} >Portfolios</NavLink>
            </li>
            <li>
                <NavLink to="/blogs" activeClassName="active-class" exact onClick={() => setToggle(false)} >Blogs</NavLink>
            </li>
            <li>
                <NavLink to="/contact" activeClassName="active-class" exact onClick={() => setToggle(false)} >Contact</NavLink>
            </li>

        </NavigationStyle>
    )
}
const NavigationStyle = styled.ul`
width: 100%;
li{
    display: block;
    &:not(:last-child){   
        margin-bottom: 1rem;
    }
    a{
        display: block;
        color: var(--border-color);
        text-align: center;
        position: relative;
        z-index: 3;
        user-select: none;
        padding: .3rem 0;
        font-weight: 600;
        transition: all .5s ease-in-out;
        letter-spacing: 1px;
        text-transform: uppercase;
        &:after{
            content: "";
            position: absolute;
            background-color:var(--border-color);
            z-index: 2;
            width: .2rem;
            height: 100%;
            left: 0;
            top: 0;
            transition: all .5s ease-in-out;         
        }
        &:hover::after{
            width: 100%;
            transition: all .5s ease-in-out;
            opacity: 0.3;
            border: #000;
        }
        &::before{
            content: "";
            position: absolute;
            background-color:var(--border-color);
            z-index: 2;
            width: .2rem;
            height: 100%;
            right: 0;
            top: 0;      
            transition: all .5s ease-in-out;   
        }
        &:hover::before{
            width: 100%;
            transition: all .5s ease-in-out;
            opacity: 0.3;
            border: #000;
        }
        &:hover{
            transition: all .5s ease-in-out;
            color: var(--font-light-color);
            font-weight: 500;
        }
    }
}
.active-class{
    transition: all .2s ease-in-out;
    background-color: var(--background-dark-color);
    color: var(--primery-color);
    font-weight: 500;
    &:after{
            content: "";
            position: absolute;
            background-color:var(--primery-color);
            z-index: 2;
            width: .2rem;
            height: 100%;
            left: 0;
            top: 0;
            transition: all .5s ease-in-out;         
    }
        &::before{
            content: "";
            position: absolute;
            background-color:var(--primery-color);
            z-index: 2;
            width: .2rem;
            height: 100%;
            right: 0;
            top: 0;      
            transition: all .5s ease-in-out;   
        }
}

`
export default Navigation
