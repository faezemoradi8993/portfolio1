import React from 'react'
import styled from 'styled-components';

const ContactItem = ({ icon, title, contact1, contact2 }) => {
    return (
        <ContactItemStyle>
            <div className='left-content'>
                <p>
                    {icon}
                </p>
            </div>
            <div className='right-content'>
                <h6>{title}</h6>
                <p>{contact1}</p>
                <p>{contact2}</p>
            </div>
        </ContactItemStyle>
    )
}
const ContactItemStyle = styled.div`
margin-bottom: 2rem;
padding :2rem;
display: flex;
align-items: center;
background-color: var(--background-dark-color-2);
.right-content{
   h6{
       color:var(--white-color);
       padding-bottom: 1rem ;
   }
   p{
       font-size: 1rem;
       padding-top: .5rem;
   }
}
.left-content{
    padding: 1.3rem;
    border: 1px solid var(--border-color);
    margin-right: 2rem;
    svg{
        font-size: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
`
export default ContactItem
