import styled from 'styled-components'

export const Container = styled.div`
background: var(--black);
color: var(--white);
width: 100%;
display: flex;
@media (max-width: 800px){
    
    margin: 0;
    display: flex;
    justify-content: center;
    margin: auto;

}
`;

export const ImageContainer = styled.div`
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
    height: 5rem;

}
@media (max-width: 425px){
    position:absolute;
    display: flex;
    justify-content: center;
    gap: 5vw; 
    padding: 0;
    top: 70vh;
    img 
    {
            cursor: pointer;
            display: block;
            max-width: 15vw;
            min-width: 12vw;
            max-height: 7vh;
            min-height: 4vh;
        .selectedPhoto{
            max-width: 15vw;
            max-height: 8vh;
        }
            
    }   
}
@media (min-width: 430px) and (max-width: 800px){
    position:absolute;
    display: flex;
    justify-content: center;
    gap: 5vw; 
    padding: 0;
    top: 82vh;
    img 
    {
            cursor: pointer;
            display: block;
            max-width: 15vw;
            min-width: 12vw;
            
            max-height: 7vh;
            min-height: 4vh;
        .selectedPhoto{
            max-width: 15vw;
            max-height: 8vh;
        }
            
    }   
}
@media screen and (min-width: 810px) {   
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
@media  screen and (min-width: 1280px) {   
    margin-left: 5rem;
    gap: 1rem; 
    img 
    {
        cursor: pointer;
        display: block;
        max-width: 70.625rem;
        width: 90px;
        height: 50px;
    }   
}

@media screen and (min-width: 2230px){
    gap: 1rem; 

    margin-left: 4rem;
    img 
    {
        cursor: pointer;
        display: block;
        max-width: 130px;
        width: 120px;
        height: 100px;
    }
}
`;