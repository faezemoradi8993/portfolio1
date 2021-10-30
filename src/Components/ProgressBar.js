import React from 'react'
import styled from 'styled-components';


const ProgressBar = ({ title, width }) => {
    return (
        <ProgressBarStyle>
            <h6>{title}</h6>
            <div className='progressbar'>
                <span>{width}</span>
                <div className='progress'>
                    <div style={{ width: width }}></div>
                </div>
            </div>
        </ProgressBarStyle>
    )
}
const ProgressBarStyle = styled.div`
    background-color: var(--background-dark-color-2);
    box-shadow: 1px 1px 10px black;
    padding :1rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    h6{
        color: var(--white-color);
        padding-bottom: .7rem;  
    }
    .progressbar{
        opacity: .6;
        display: flex;
        align-items: center;
        span{
            padding-right: .5rem;
            font-size: 1rem;
        }
        .progress{
            width: 100%;
            height: .4rem;
            position: relative;
            background-color: var(--border-color);
            display: flex;
            border-radius: 5px;
            div{
                position: absolute;
                left: 0;
                bottom: 0px;
                height: 100%;
                background-color: var(--primery-color);
                border-radius: 5px;
            }
        }
    }
`

export default ProgressBar
