import React from 'react'
import styled from 'styled-components';


const SmallTitle = ({ icon, title }) => {
    return (
        <SmallTitleStyle>
            <span>{icon}</span><h3>{title}</h3>
        </SmallTitleStyle>
    )
}
const SmallTitleStyle = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 3.5rem;
    margin-top: 6rem;
    span{
        padding-right: 1rem ;
        svg{
            font-size: 2.5rem;
        }
    }
    h3{
        color: var(--white-color);
        font-size: 2rem;
        font-weight: 600;
    }

`

export default SmallTitle
