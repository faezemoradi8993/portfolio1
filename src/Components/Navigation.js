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
            {/* <li>
                <NavLink to="/portfolios" activeClassName="active-class" exact onClick={() => setToggle(false)} >Portfolios</NavLink>
            </li>
            <li>
                <NavLink to="/blogs" activeClassName="active-class" exact onClick={() => setToggle(false)} >Blogs</NavLink>
            </li> */}
            <li>
                <NavLink to="/contact" activeClassName="active-class" exact onClick={() => setToggle(false)} >Contact</NavLink>
            </li>
            {/* <li>
                <NavLink to="/splash" activeClassName="active-class" exact onClick={() => setToggle(false)} >Splash</NavLink>
            </li> */}

        </NavigationStyle>
    )
}
const NavigationStyle = styled.ul`
    width: 100%;
    margin-top: .8rem;
    margin-bottom: .8rem;
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
            transition: all .5s ease;
            letter-spacing: 1px;
            text-transform: uppercase;
            &:after{
                content: "";
                position: absolute;
                background-color:var(--border-color);
                z-index: 2;
                width: 0;
                height: 100%;
                left: 0;
                top: 0;
                transition: all .5s ease;         
            }
            &:hover::after{
                width: 100%;
                transition: all .5s ease;
                opacity: 0.3;
                border: #000;
            }
            &::before{
                content: "";
                position: absolute;
                background-color:var(--border-color);
                z-index: 2;
                width: 0;
                height: 100%;
                right: 0;
                top: 0;      
                transition: all .5s ease;   
            }
            &:hover::before{
                width: 100%;
                transition: all .5s ease;
                opacity: 0.3;
                border: #000;
            }
            &:hover{
                transition: all .5s ease;
                color: var(--font-light-color);
            
            }
        }
    }
    .active-class{
        transition: all .5s ease;
        background-color: var(--background-dark-color);
        color: var(--primery-color);
        &:after{
            content: "";
            position: absolute;
            background-color:var(--primery-color);
            z-index: 2;
            width: 0;
            height: 100%;
            left: 0;
            top: 0;
            transition: all .5s ease;         
        }
        &::before{
            content: "";
            position: absolute;
            background-color:var(--primery-color);
            z-index: 2;
            width: 0;
            height: 100%;
            right: 0;
            top: 0;      
            transition: all .5s ease;   
        }
    }

`
export default Navigation
