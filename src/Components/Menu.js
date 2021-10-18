import React from 'react'
import styled from 'styled-components';
import { GitHub } from '@material-ui/icons'


const Menu = ({ menuItem }) => {
    return (
        <MenuItemStyle>
            {
                menuItem.map(item => (
                    <div className='grid-item' key={item.id}>
                        <div className='portpolio-content'>
                            <div className='portfolio-image'>
                                <img src={item.image} alt='' />
                                <ul>
                                    <li><a href={item.link1}><GitHub /></a></li>
                                    <li><a href={item.link2}><GitHub /></a></li>
                                </ul>
                            </div>
                        </div>
                        <h6>{item.title}</h6>
                        <p>{item.text}</p>
                    </div>
                ))
            }
        </MenuItemStyle>
    )
}
const MenuItemStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 2rem;
    @media screen and (max-width:1000px){
        grid-template-columns: repeat(2,1fr); 
    }
    @media screen and (max-width:600px){
        grid-template-columns: repeat(1,1fr); 
    }
    .grid-item{
        background-color: var(--background-dark-color-2);
        padding: 1rem;
        .portpolio-content{
            display: block;
            position: relative;
            .portfolio-image{
                img{
                    height: 30vh;
                    width: 100%;
                    object-fit: cover;
                    @media screen and (max-width:800px){
                        height: 50vh;
                    }
                }
                ul{
                    display: none;
                }
            }
        }
        h6{
            color: var(--white-color);
            padding: .6rem 0;
            font-size: 1.3rem;
        }
        p{
            padding: .4rem 0;
        }
    }
`
export default Menu
