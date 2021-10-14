import React from 'react'
import styled from 'styled-components';
import Title from '../Components/Title';
import { MainLayout } from '../Styles/MainLayout';
import PrimaryButton from './../Components/PrimaryButton';
// import {PhoneIcon,HomeIcon} from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import ContactItem from '../Components/ContactItem';

const Contact = () => {
    // const phone= <PhoneIcon/>
    // const email= <EmailIcon/>
    // const address= <HomeIcon/>
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
                            <PrimaryButton title='Submit'/>
                        </form>
                    </div>
                    <div className='left-container'>
                        <ContactItem icon={phone} title='Phone' contact1='09153488577' contact2='09021461242'/>
                        {/* <ContactItem icon={email} title='Email' contact1='faeze.moradi8993@gmail.com' contact2='faeze.moradi8993@gmail.com'/> */}
                        <ContactItem icon={address} title='Address' contact1='Iran ,Tehran ' contact2='Iran , Iranshahr'/>
                    </div>
                </ContactStyle>
        </MainLayout>
    )
}
const ContactStyle = styled.div`
    width: 100%;
    padding:3rem 0 0 0;
    display: grid;
    grid-template-columns:repeat(2, 1fr);
    grid-column-gap: 2rem;
    width: 100%;
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
                    transition: all .3s ease-in-out;
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

`
export default Contact
