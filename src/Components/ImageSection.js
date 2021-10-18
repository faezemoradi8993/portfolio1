import React from 'react'
import styled from 'styled-components'
import resume from '../Images/img (2).jpeg'
import PrimaryButton from '../Components/PrimaryButton'
import { InnerLayout } from '../Styles/MainLayout'
import Title from './Title'
import cv from '../resume-farsi-faezemoradi.pdf'

const ImageSection = () => {
    return (
        <InnerLayout>
             <Title title="About Me" span="About me" />
            <ImageSectionStyle>
                <div className="left-content">
                    <img src={resume} />
                </div>
                <div className="right-content">

                    <h4>i am <span>faeze moradi</span></h4>
                    <p className="paragraphy">
                        Enim id culpa pariatur nisi incididunt aliqua et incididunt consequat. Laboris ad enim velit consectetur eiusmod amet in et labore ex duis est. Ipsum excepteur eiusmod excepteur magna tempor consequat cupidatat sit qui qui excepteur id duis officia sint culpa aliquip dolore qui.
                    </p>
                    <div className="about-info">
                        <div className="info-title">
                            <p>Full Name </p>
                            <p>Age </p>
                            <p>Nationality </p>
                            <p>Language </p>
                            <p>Location </p>
                            <p>Service </p>
                        </div>
                        <div className="info-value">
                            <p>: Faeze Moradi</p>
                            <p>: 29</p>
                            <p>: Iran</p>
                            <p>: Persian</p>
                            <p>: Iran , Tehran</p>
                            <p>: Frelance</p>
                        </div>
                        
                    </div>
                    <a target="_blank" href={cv} target="_blank" download><PrimaryButton title="download cv" />
                    </a>
                  

                </div>
            </ImageSectionStyle>
        </InnerLayout>
    )
}
const ImageSectionStyle = styled.div`
width: 100%;
display: flex;
margin-top: 5rem;
@media screen and (max-width:768px){
        flex-direction: column;
    }
.left-content{
    width: 50%;
    @media screen and (max-width:768px){
        width: 100%;
    }
    /* padding-bottom: 2rem; */
    img{
        object-fit: cover;
        object-position: top;
        width: 90%;
        height: 100%;
        margin:0 auto;
        @media screen and (max-width:768px){
            width: 100%;
        }
}
    
}
.right-content{
    width: 50%;
    @media screen and (max-width:768px){
        width: 100%;
    }
        h4{
            padding-bottom: 2rem;
            font-size: 2rem;
            color: var(--white-color);
            span{
                color: var(--primery-color);
                font-size: 2rem;
            }
            @media screen and (max-width:768px){
                padding-top: 2rem;
        }
        }
        .paragraphy{
            padding-bottom: 2rem;
            
        }
        .about-info{
            padding-bottom: 2rem;
            display: flex;
            .info-title{
                p{ 
                    padding-bottom: .3rem;
                    font-weight: 600;
                }
            }
            .info-value{
                padding-left: 2rem;
                p{
                    color: var(--primery-color);
                    padding-bottom: .3rem;
                    letter-spacing: .1rem;
                    font-weight: 600;
                }
            }
        }
}
`
export default ImageSection
