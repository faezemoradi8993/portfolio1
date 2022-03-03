import styled from "styled-components";

export const MainLayout = styled.div`
    padding:3rem;
    width: 100%;
    @media screen and (max-width:800px){
        padding: 2rem;
    }
    @media screen and (max-width:600px){
        padding:2rem 1rem;
}
`

export const InnerLayout = styled.div`
    padding: 0 0 5rem 0;
    width: 100%;
    @media screen and (max-width:800px){
        padding: 0 0 5rem 0;
    }
`