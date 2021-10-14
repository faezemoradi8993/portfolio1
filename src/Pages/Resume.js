import React from 'react'
import Title from '../Components/Title'
import { MainLayout } from '../Styles/MainLayout'
import SkillData from '../Data/SkilsData'
import ProgressBar from '../Components/ProgressBar'
import  styled  from 'styled-components';

const Resume = () => {
    return (
        <MainLayout>
            <Title title="Resume" span="Resume" />
            <ResumeStyle>
                <div className='skills'>
                   {
                       SkillData.map(skill=> <ProgressBar title={skill.title} width={skill.width} />)
                   } 
                </div>
            </ResumeStyle>
        </MainLayout>
    )
}
const ResumeStyle = styled.div`
.skills{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-column-gap: 3rem;
    grid-row-gap: 2rem;
}
`
export default Resume
