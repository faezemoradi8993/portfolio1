import React from 'react'
import styled  from 'styled-components';

const ProgressBar = ({title, width}) => {
    return (
        <ProgressBarStyle>
            <h6>{title}</h6>
            <div className='progress'>
                <span style={{width:width}}></span>
            </div>
        </ProgressBarStyle>
    )
}
const ProgressBarStyle= styled.div`
display: flex;
h6{
    color: var(--white-color);
    padding-right: 2rem;
}
.progress{
    width: 100%;
    height: .4rem;
    position: relative;
    background-color: var(--border-color);
    span{
        position: absolute;
        left: 0;
        bottom: 0;
        height: 100%;
        background-color: var(--primery-color);
    }
}
`

export default ProgressBar
