import React from 'react'
import styled from 'styled-components'
import ReviewItem from './ReviewItem'


const ReviewsSection = ({ text }) => {
    return (
        <ReviewsSectionStyle>
            <div className='reviews'>

            <ReviewItem text="Elit officia enim dolor nostrud incididunt excepteur aute. Cupidatat deserunt nostrud nisi nostrud amet sunt velit sint. Adipisicing officia et sint aute exercitation commodo enim ut."/>
            <ReviewItem text="Elit officia enim dolor nostrud incididunt excepteur aute. Cupidatat deserunt nostrud nisi nostrud amet sunt velit sint. Adipisicing officia et sint aute exercitation commodo enim ut."/>
            </div>
        </ReviewsSectionStyle>
    )
}
const ReviewsSectionStyle = styled.div`
width: 100%;
.reviews{
    display: flex;
}

`
export default ReviewsSection
