import React from 'react'
import { Helmet } from 'react-helmet';
import Menu from 'Components/Menu';
import portfoliosDate from 'Data/portfoliosData'
import { MainLayout } from 'Styles/MainLayout'
import Title from 'Components/Title';


const Portfolios = () => {
    return (
        <>
        <Helmet><title>Portfolios</title></Helmet>
        <MainLayout>
            <Title title={'Portfolio'} span={'Portfolio'} />
            <Menu menuItem={portfoliosDate} />
        </MainLayout>
        </>
    )
}

export default Portfolios
