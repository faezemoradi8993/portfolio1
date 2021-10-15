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
                <InnerLayout>
                    <ResumeSection />
                </InnerLayout>
            </ResumeStyle>
        </MainLayout>
    )
}
const ResumeStyle = styled.div`
.skills{
    padding-top: 3rem;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-column-gap: 3rem;
    grid-row-gap: 2rem;
}
`
export default ResumePage
