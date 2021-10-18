import React from 'react'
import Menu from '../Components/Menu';
import portfoliosDate from '../Data/portfoliosData'
import { MainLayout } from '../Styles/MainLayout'
import Title from './../Components/Title';


const Portfolios = () => {
    return (
        <MainLayout>
            <Title title={'Portfolio'} span={'Portfolio'} />
            <Menu menuItem={portfoliosDate} />
        </MainLayout>
    )
}

export default Portfolios
