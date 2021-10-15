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

                        <div  key={blog.id} className='blog-item'>
                            <div className='image'>
                                <img src={blog.image} />
                            </div>
                            <div className='title'>
                                <a href={blog.link}>{blog.title}</a>
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
    width: 100%;
.blog-item{
    background-color: var(--background-dark-color-2);
    padding:1rem;
    padding-bottom: 4rem;
}
.image{
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding-bottom: 1rem;
    img{
        object-position: center;
        overflow: hidden;
        object-fit: cover;
        width: 100%;
        height: 100%;
        transition: all .5s ease-in-out;
        &:hover {
            transform: rotate(2deg) scale(1.07);
            transition: all .5s ease-in-out;
        }
    }
}
a{
    color:var(--white-color);
    font-size: 1rem;
    &:hover{
        transition: all .3s ease-in-out;
        color: var(--primery-color);
    }
.date{

}
}
`
export default Blogs

