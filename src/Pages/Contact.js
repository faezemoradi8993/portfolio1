import React from 'react'
import styled from 'styled-components';
import Title from '../Components/Title';
import { MainLayout } from '../Styles/MainLayout';
import PrimaryButton from './../Components/PrimaryButton';
import { Phone, Email } from '@material-ui/icons';
import RoomIcon from '@material-ui/icons/Room';
import ContactItem from '../Components/ContactItem';


const Contact = () => {
    const phone = <Phone />
    const email = <Email />
    const room = <RoomIcon />
    return (
        <MainLayout>
            <Title title="Contact Us" span="Contact Us" />
            <ContactStyle >
                <div className='right-container'>
                    <div className='contact-title'>
                        <h4>Get in touch</h4>
                    </div>
                    <form className='form'>
                        <div className='form-field'>
                            <label htmlFor='name' >Enter your Name</label>
                            <input type='text' id="name" />
                        </div>
                        <div className='form-field'>
                            <label htmlFor='email' >Enter your Email</label>
                            <input type='text' id="email" />
                        </div>
                        <div className='form-field'>
                            <label htmlFor='Subject' >Enter Subject</label>
                            <input type='text' id="subject" />
                        </div>
                        <div className='form-field'>
                            <label htmlFor='messagge' >Enter Your Message</label>
                            <textarea id="message" />
                        </div>
                        <PrimaryButton title='Submit' />
                    </form>
                </div>
                <div className='left-container'>
                    <ContactItem icon={phone} title='Phone' contact1='09153488577' contact2='09021461242' />
                    <ContactItem icon={email} title='Email' contact1='faeze.moradi8993@gmail.com' contact2='faeze.moradi8993@gmail.com' />
                    <ContactItem icon={room} title='Address' contact1='Iran ,Tehran ' contact2='Iran , Iranshahr' />
                </div>
            </ContactStyle>
        </MainLayout>
    )
}
const ContactStyle = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns:repeat(2, 1fr);
    grid-column-gap: 2rem;
    width: 100%;
    @media screen and (max-width:1000px){
        grid-template-columns:repeat(1, 1fr);
    }
    .right-container{
        width: 100%;
        .contact-title{
            h4{
                color: var(--white-color);
                font-weight:600;
                padding: 0 1rem 2.5rem 0;
                font-size: 2rem;
            }
        }
        .form{
            width: 100%;
            .form-field{
                box-shadow: 1px 1px 10px black;
                width: 100%;
                position: relative;
                margin-bottom: 30px;
                label{
                    font-weight: 600;
                    position: absolute;
                    top: -13px;
                    left: 20px;
                    padding: 0 10px;
                    background-color: var(--background-dark-color);
                }
                input{
                    height: 50px;
                }
                textarea{
                    height: 8rem;
                }
                textarea , input{
                    transition: all .3s ease;
                    border: .1rem solid var(--border-color);
                    background-color: transparent;
                    font-size: 1rem;
                    color: var(--font-light-color);
                    outline: none;
                    padding: 10px;
                    width: 100%;
                    &:focus{
                        border: .1rem solid var(--primery-color);
                    }
                }
            }
        }
    }
    .left-container{
        @media screen and (max-width:1000px){
            margin-top: 2rem;
        } 
    }
`
export default Contact
