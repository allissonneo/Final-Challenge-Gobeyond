import styled from 'styled-components'

export const Container = styled.div`
background: var(--black);
color: var(--white);
width: 100%;
display: flex;
`;

export const ImageContainer = styled.div`
max-width: 100%;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
gap: 2.5rem;
padding: 40px 0 0 0;
align-items: center;
margin: auto;
margin-bottom: 5rem;
img 
{
    cursor: pointer;
    display: block;
    max-width: 70.625rem;
    width: 6.25rem;
    height: 6.25rem;
    /* margin: 5px 0 0 0; */

}
`;