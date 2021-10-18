import React from 'react'
import styled  from 'styled-components';

const ServicesCard = ({title,img,caption}) => {
    return ( 
        <ServicesCardStyle>
            <img src={img} alt={title}/>
            <h4>{title}</h4>
            <h5></h5>
            <p>{caption}</p>  
        </ServicesCardStyle>
    )
}
const ServicesCardStyle= styled.div`
flex:1;
padding: 1.5rem;
background-color: var(--background-dark-color-2);
position: relative;
z-index: 3;
transition: all .2s ease;
&::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: .3rem;
    z-index: 5;
    background-color:var(--border-color);
}
&:hover::after{
    background-color:var(--primery-color);
    transition: all .5s ease;
}
&:hover{
    /* margin-top: -.3rem; */
    transform: translateY(-15px);
    transition: all .2s ease;
}
h4{
    padding: .5rem 0 1rem 0;
    color: var(--white-color);
}
h5{width:3rem;
    border-bottom: 2px var(--border-color)solid;
    border-radius: 20px;
    margin-bottom: 1rem;
}
p{
    color: var(--font-light-color);
}
`
export default ServicesCard
