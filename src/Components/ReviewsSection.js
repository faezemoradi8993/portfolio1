import React from 'react'
import styled from 'styled-components'
import ReviewItem from './ReviewItem'
import Title from './Title'


const ReviewsSection = ({ text }) => {
    return (
        <ReviewsSectionStyle>
            <Title title="Reviews" span="Reviews" />
            <div className='reviews'>
                <ReviewItem text="Elit officia enim dolor nostrud incididunt excepteur aute. Cupidatat deserunt nostrud nisi nostrud amet sunt velit sint. Adipisicing officia et sint aute exercitation commodo enim ut." />
                <ReviewItem text="Elit officia enim dolor nostrud incididunt excepteur aute. Cupidatat deserunt nostrud nisi nostrud amet sunt velit sint. Adipisicing officia et sint aute exercitation commodo enim ut." />
            </div>
        </ReviewsSectionStyle>
    )
}
const ReviewsSectionStyle = styled.div`
    width: 100%;
    .reviews{
        margin-top: 5.5rem;
        display: flex;
        @media screen and (max-width:768px){
            flex-direction: column;
        }
    }

`
export default ReviewsSection
