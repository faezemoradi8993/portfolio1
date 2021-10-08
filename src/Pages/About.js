import React from 'react'
import styled from 'styled-components'
import { MainLayout } from '../Styles/MainLayout'
import Title from '../Components/Title.js'
import ImageSection from '../Components/ImageSection'

const About = () => {
    return (
        <MainLayout>
            <AboutStyle>
                <Title title="About Me" span="About me" />
                <ImageSection />
      
            </AboutStyle>
        </MainLayout>
    )
}
const AboutStyle = styled.section`


`
export default About
