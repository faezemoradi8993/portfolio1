import React from 'react'
import Title from '../Components/Title'
import { MainLayout, InnerLayout } from '../Styles/MainLayout'
import styled from 'styled-components';
import Skills from '../Components/Skills'
import ResumeSection from '../Components/ResumeSection';


const ResumePage = () => {
    return (
        <MainLayout>
            <ResumeStyle>
                <Skills />
                <Title title="Resume" span="Resume" />
                    <ResumeSection />
            </ResumeStyle>
        </MainLayout>
    )
}
const ResumeStyle = styled.div`
min-height: 100vh;
width: 100%;
`
export default ResumePage
