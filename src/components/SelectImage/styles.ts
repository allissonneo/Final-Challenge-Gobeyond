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
padding: 5.5rem 0 0 0;
align-items: center;
margin: auto;
img 
{
    cursor: pointer;
    display: block;
    max-width: 70.625rem;
    width: 7.5rem;
    height: 80px;

}
@media only screen and (max-width: 1280px) {   
    margin-left: 5rem;
    gap: 0.1rem; 
    img 
    {
        cursor: pointer;
        display: block;
        max-width: 70.625rem;
        width: 65px;
        height: 50px;
    }   
}
@media only screen and (min-width: 1430px) {   
    margin-left: 5rem;
    gap: 0.8rem; 
    img 
    {
        cursor: pointer;
        display: block;
        max-width: 70.625rem;
        width: 85px;
        height: 60px;
    }   
}
@media screen and (min-width: 2230px){
    gap: 1rem; 

    margin-left: 4rem;
    img 
    {
        cursor: pointer;
        display: block;
        max-width: 1130px;
        width: 120px;
        height: 120px;
    }
}
`;