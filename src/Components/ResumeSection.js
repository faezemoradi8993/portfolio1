import React from 'react'
import styled from 'styled-components';
import SmallTitle from './SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import SchoolIcon from '@material-ui/icons/School'
import { InnerLayout } from '../Styles/MainLayout';
import ResumeItem from './ResumeItem';


const ResumeSection = () => {
    const work = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <InnerLayout>
            <ResumeSectionStyle>
                <SmallTitle icon={work} title={'Working Experince'} />
                <div className='resume-content'>
                    <ResumeItem year={'2015 - 2020'} title={'Adminastrative Officer'} subTitle={'Tarh & Andishe Behsaz Mellat'} text={".I worked as a company representive in the Social-Security-Organization , i was responsible for all mafasahesabs matters" } />
                    <ResumeItem year={'2015 - 2020'} title={'Adminastrative Officer'} subTitle={'Tarh & Andishe Behsaz Mellat'} text={".I worked as a company representive in the Social-Security-Organization , i was responsible for all mafasahesabs matters" } />
                    <ResumeItem year={'2015 - 2020'} title={'Adminastrative Officer'} subTitle={'Tarh & Andishe Behsaz Mellat'} text={".I worked as a company representive in the Social-Security-Organization , i was responsible for all mafasahesabs matters" } />
                </div>
                <SmallTitle icon={school} title={'Education'} />
                <div className='resume-content'>
                    <ResumeItem year={'2010 - 2015'} title={'Computer Engineering - Bachlor'} subTitle={'Shahid Bahonar Univercity of Kerman'} text={"..." } />
                </div>
            </ResumeSectionStyle>
        </InnerLayout>
    )
}
const ResumeSectionStyle = styled.div`
.resume-content{
    border-left: .1rem solid var(--border-color);
    padding-left: 1.4rem;
    @media screen and (max-width:400px){
        padding-left: 1rem;
        }
}
`
export default ResumeSection
