import React from 'react'
import styled  from 'styled-components';

const ContactItem = ({icon , title , contact1 , contact2}) => {
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
const ContactItemStyle= styled.div`
margin-bottom: 3rem;
display: flex;
align-items: center;
background-color: var(--background-dark-color-3);
.right-content{
   h6{
       color:var(--white-color);
       padding: 1rem ;
   }
   p{
       padding: 1rem;
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
