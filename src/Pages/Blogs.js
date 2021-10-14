import React from 'react'
import styled from 'styled-components';
import Title from '../Components/Title';
import blogs from '../Data/BlogsData';
import { MainLayout, InnerLayout } from '../Styles/MainLayout';

const Blogs = () => {
    return (
        <MainLayout>
            <BlogsStyle>
                <Title title={'Blogs'} span={'Blogs'} />
                <InnerLayout className='blog'>
                {blogs.map(blog => (

                        <div  key={blog.id}>
                            <div className='image'>
                                <img src={blog.image} />
                            </div>
                            <div className='title'>
                                <h4>{blog.title}</h4>
                            </div>
                            <div className='date'>
                                <span></span><span></span><span></span>
                            </div>
                        </div>
                ))}
                </InnerLayout>
            </BlogsStyle>
        </MainLayout>
    )
}
const BlogsStyle = styled.div`
.blog{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-column-gap: 3rem;
    grid-row-gap:2rem;
    padding: 3rem;
    background-color: var(--background-dark-color-2);
width: 100%;
.image{
    width: 100%;
height: 90%;
    img{
        object-position: center;
    object-fit: cover;
    width: 100%;
    height: 98%;
    }
}
.title{

}
.date{

}
}
`
export default Blogs

