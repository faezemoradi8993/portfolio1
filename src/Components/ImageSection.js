import React from 'react'
import styled from 'styled-components'
import resume from '../Images/resume.jpg'
import PrimaryButton from '../Components/PrimaryButton'

const ImageSection = () => {
    return (
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
                    <PrimaryButton title="download cv"/>
          
            </div>
        </ImageSectionStyle>
    )
}
const ImageSectionStyle = styled.div`
width: 100%;
display: flex;
margin-top: 5rem;
.left-content{
    width: 50%;
    /* padding-bottom: 2rem; */
    img{
        object-fit: cover;
        object-position: top;
        width: 90%;
        height: 100%;
        margin:0 auto;
}
    
}
.right-content{
  
 width: 50%;
        h4{
            padding-bottom: 2rem;
            font-size: 2rem;
            color: var(--white-color);
            span{
                color: var(--primery-color);
                font-size: 2rem;
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
                }
            }
        }
}
`
export default ImageSection
