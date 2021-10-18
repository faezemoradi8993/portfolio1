import React from 'react'
import styled from 'styled-components';


const ResumeItem = ({ year, title, subTitle, text }) => {
    return (
        <ResumeItemStyle>
            <div className='left-content'>
                <p>{year}</p>
            </div>
            <div className='right-content'>
                <h3>{title}</h3>
                <h5>{subTitle}</h5>
                <p>{text}</p>
            </div>
        </ResumeItemStyle>
    )
}
const ResumeItemStyle = styled.div`
    display: flex;
    &:not(:last-child){
        padding-bottom: 2rem;
    }
    width: 100%;
    position: relative;
    .left-content{
        width: 30%;
        position: relative;
        &::before{
            position: absolute;
            content: '';
            top:0;
            left: -38px;
            width: 1.2rem;
            height: 1.2rem;
            border: .1rem solid  var(--border-color);
            background-color: var(--background-dark-color);
            border-radius: 50%;
            @media screen and (max-width:400px){
                left: -31px;
            }
        }
        p{
            display: inline-block;
        }
    }
    .right-content{
        width: 70%;
        padding-left: 3rem;
        position: relative;
        @media screen and (max-width:500px){
            padding-left: 1.5rem;
        }
        
        &::before{
            position: absolute;
            content: "";
            top: 13px;
            left :-1rem;
            width: 3rem;
            height: .1rem;
            background-color: var(--border-color);
            @media screen and (max-width:500px){
                padding-left: 1.5rem;
                left :-.8rem;
                width: .3rem;
            }
        }
        h3{
            font-size: 1.5rem;
            color: var(--primery-color);
            padding-bottom:.6rem;
            word-break: break-word;
        }
        h5{
            padding-bottom:.8rem;
            font-size: 1rem;
        }
        p{
            display: inline-block;
            font-size: .9rem;
        }
    }

`
export default ResumeItem
