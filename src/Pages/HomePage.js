import React from 'react'
import styled from 'styled-components'
import Particle from '../Components/Particle';
import { Facebook, GitHub, Instagram } from '@material-ui/icons';


const HomePage = () => {
    return (
            <HomePageStyle>
            <Particle />
            <div className="typography">
                <h1>Hi i'm <span>faeze moradi</span></h1>
                <p>Eiusmod labore sint adipisicing non irure enim amet excepteur incididunt amet id non adipisicing voluptate. Laboris esse non consectetur dolore cillum tempor ipsum consequat ad. Id magna officia ipsum veniam labore incididunt reprehenderit velit amet elit officia eu aliquip. Enim pariatur anim deserunt reprehenderit ut excepteur aliqua labore qui. </p>
                <div className="icons">
                    <a href="https://facebook.com/faezemoradi8993" className="i-facebook"><Facebook /></a>
                    <a href="https://instagram.com/faezemoradi_developer" className="i-instagram"><Instagram /></a>
                    <a href="https://github.com/faezemoradi8993" className="i-github"><GitHub /></a>
                </div>
            </div>
        </HomePageStyle>
    )
}
const HomePageStyle = styled.header`
height: 100vh;
width: 100%;
position: relative;
display: flex;
align-items: center;
justify-content: space-evenly;
flex-direction: column;
padding: 5rem;
.typography{
    text-align: center;
    h1{
padding-bottom: 2rem;
font-size: 3rem;
color: var(--white-color);
span{
            font-size: 3rem;
color: var(--primery-color);
        }
    }
}
p{
color: var(--font-light-color);
font-size: 1.1rem;
padding-bottom: 2rem;
}
.icons{
    display: flex;
    align-items: center;
    justify-content: center;
    a{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
        border: 2px solid var(--font-light-color);
        background-color: rgba(0 0 0 /30%);
        transition: all .3s ease-in-out;
        color: var(--primery-color);

    }
    a:not(last-child){
        margin-right: 1rem;
    }
    .i-instagram{
&:hover{
    color: #8a3ab9;
}
    }
    .i-github{
        &:hover{
    color: #fff;
}
    }
    .i-facebook{
        &:hover{
    color: #3b5998;
}
    }
}
`
export default HomePage
