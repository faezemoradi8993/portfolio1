import React from "react";
import styled from "styled-components";
import SmallTitle from "./SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "./ResumeItem";

const ResumeSection = () => {
  const work = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeSectionStyle>
      <SmallTitle icon={work} title={"Working Experince"} />
      <div className="resume-content">
                                             <ResumeItem
          year={"2024 - Now"}
          title={"FrontEnd Developer"}
          subTitle={"Sadad Informatic Corporation"}
          text={
            "I am currently working on the admin project of National Bank of Iran website, a web application built with React, Antd, etc."
          }
        />
                                                                                <ResumeItem
          year={"2023 - 2024"}
          title={"FrontEnd Developer"}
          subTitle={"TelC"}
          text={
            "We developed a professional panel for mci (hamrahe avval)"
          }
        />
        <ResumeItem
          year={"2022 - Now"}
          title={"React Developer"}
          subTitle={"TechnoSun"}
          text={
            "we developed seller pannel with React , Typescript and Tailwind , .."
          }
        />
        <ResumeItem
          year={"2021 - 2021"}
          title={"React Developer"}
          subTitle={"Ratech company"}
          text={
            "I develop some pages for optim-block project , I worked there for two month ."
          }
        />
        <ResumeItem
          year={"2021 - 2021"}
          title={"Intern front-end developer"}
          subTitle={"Nokarto"}
          text={
            "It was my first experience on web developing , I was there 1 month ."
          }
        />
        <ResumeItem
          year={"2015 - 2020"}
          title={"Adminastrative Officer"}
          subTitle={"Tarh & Andishe Behsaz Mellat"}
          text={
            "I worked there for 5 years there as a company representive in the Social-Security-Organization , i was responsible for all mafasahesabs matters"
          }
        />
      </div>
      <SmallTitle icon={school} title={"Education"} />
      <div className="resume-content">
        <ResumeItem
          year={"2010 - 2015"}
          title={"Computer Engineering - Bachlor"}
          subTitle={"Shahid Bahonar Univercity of Kerman"}
          text={""}
        />
      </div>
    </ResumeSectionStyle>
  );
};
const ResumeSectionStyle = styled.div`
  .resume-content {
    border-radius: 20px;
    margin-top: 5.5rem;
    background-color: var(--background-dark-color-2);
    box-shadow: 1px 1px 10px black;
    padding: 1rem;
    border-left: 0.1rem solid var(--border-color);
    padding-left: 1.4rem;
    @media screen and (max-width: 400px) {
      padding-left: 1rem;
    }
  }
`;
export default ResumeSection;
