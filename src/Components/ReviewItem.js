import React from 'react'
import styled from 'styled-components'


const ReviewItem = ({ text }) => {
    return (
        <ReviewItemStyle>
            <p>{text}</p>
        </ReviewItemStyle>
    )
}
const ReviewItemStyle = styled.div`
box-shadow: 1px 1px 10px black;
    flex:1;
    width: 100%;
    padding:2rem 1rem;
    background-color: var(--background-dark-color-2);
    position: relative;
    border-left: .3rem var(--border-color) solid;
    transition: all .2s ease;
    &:not(:last-child){
        margin-right: 1rem;
        @media screen and (max-width:768px){
            :not(:last-child){
                margin-right: 0;
                margin-bottom: 3.5rem;
            }
        }
    }
    /* &::after{
        content: '';
        position: absolute;
        top: 100%;
        left: 2rem;
        border-width: 1rem;
        border-style: solid;
        border-color: var(--background-dark-color-2) transparent transparent  var(--background-dark-color-2);
    } */
  
    &:hover{
        @media screen and (min-width:768px){
            transform: translateY(-15px);
        }
        border-left: .3rem var(--primery-color) solid; 
        transition: all .2s ease;
    }

`
export default ReviewItem
