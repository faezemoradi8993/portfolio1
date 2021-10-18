import React from 'react'
import styled from 'styled-components'


const PrimaryButton = ({ title }) => {
    return (
        <PrimaryButtonStyle>
            {title}
        </PrimaryButtonStyle>
    )
}
const PrimaryButtonStyle = styled.a`
    display: inline-block;
    background-image:linear-gradient(to top , var(--primery-color),var(--secondary-color));
    padding: 1rem 2rem;
    text-align:center;
    color: var(--white-color);
    text-transform: uppercase;
    cursor: pointer;
    position: relative;
    &:after{
        transition: all .3s ease;
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 0;
        height: .3rem;
        background-color: transparent;
    }
    &:hover::after{
        transition: all .3s ease;
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        background-color: var(--white-color);
    }
`

export default PrimaryButton
