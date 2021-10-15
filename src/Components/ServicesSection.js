import React from 'react'
import styled from 'styled-components'
import ServicesCard from './ServicesCard'
import Image1 from '../Images/design.svg'
import Image2 from '../Images/intelligence.svg'
import Image3 from '../Images/game-dev.svg'
import Title from './Title'
import { InnerLayout } from '../Styles/MainLayout'

const ServicesSection = () => {
    return (
        <InnerLayout>
        <Title title="Services" span="Services" /> 
            <ServicesSectionStyle>
                <ServicesCard title='Web Design' caption='Officia amet in labore consectetur ipsum velit velit qui elit magna. Occaecat ullamco excepteur ipsum labore' img={Image1}/>
                <ServicesCard title='Artifical inteligence' caption='in esse nostrud. Adipisicing adipisicing cillum moEst qui reprehenderit pariatur anim est esse. Irure mollit deserunt pariatur enim.' img={Image2}/>
                <ServicesCard title='game development' caption='Laboris pariatur ea commodo ad cupidatat incididunt ex excepteur elit pariatur nulla proident.n cillum mollit commodo do pariatur ullamco.' img={Image3}/>
            </ServicesSectionStyle>
        </InnerLayout>
 
    )
}
const ServicesSectionStyle = styled.div`
width: 100%;
display: flex;
margin-top: 5rem;
div:not(:last-child){
    margin-right: 1rem;
}
`
export default ServicesSection
