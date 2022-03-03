import React from "react";
import styled from "styled-components";

const ContactItem = ({ icon, title, contact1, contact2 }) => {
  return (
    <ContactItemStyle>
      <div className="top-content">
        <p>{icon}</p>
        <h6>{title}</h6>
      </div>
      <div className="bottom-content">
        <p>{contact1}</p>
        <p>{contact2}</p>
      </div>
    </ContactItemStyle>
  );
};
const ContactItemStyle = styled.div`
  border-radius: 20px;
  box-shadow: 1px 1px 10px black;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background-dark-color-2);
  @media screen and (max-width: 400px) {
    flex-direction: column;
    text-align: center;
  }
  .bottom-content {
    p {
      font-size: .8rem;
      padding-top: 0.5rem;
    }
  }
  .top-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    padding: 1rem;
    border: 1px solid var(--border-color);
    @media screen and (max-width: 400px) {
      margin-right: 0;
      margin-bottom: 2rem;
    }
    h6 {
      color: var(--white-color);
    }
    svg {
      font-size: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
export default ContactItem;
