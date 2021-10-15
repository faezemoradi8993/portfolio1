import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Styles/MainLayout'
import ReviewItem from './ReviewItem'
import Title from './Title'

const ReviewsSection = ({ text }) => {
    return (
        <InnerLayout>
        <Title title="Reviews" span="Reviews" /> 
        <ReviewsSectionStyle>
            <div className='reviews'>
            <ReviewItem text="Elit officia enim dolor nostrud incididunt excepteur aute. Cupidatat deserunt nostrud nisi nostrud amet sunt velit sint. Adipisicing officia et sint aute exercitation commodo enim ut."/>
            <ReviewItem text="Elit officia enim dolor nostrud incididunt excepteur aute. Cupidatat deserunt nostrud nisi nostrud amet sunt velit sint. Adipisicing officia et sint aute exercitation commodo enim ut."/>
            </div>
        </ReviewsSectionStyle>
        </InnerLayout>
    )
}
const ReviewsSectionStyle = styled.div`
margin-top: 5rem;
width: 100%;
.reviews{
    display: flex;
}

`
export default ReviewsSection
