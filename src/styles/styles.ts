import styled from 'styled-components'

export const MainContainer = styled.main`
padding-bottom: 2rem;
background: var(--black);
display: flex;
width: 100%;
flex-wrap: nowrap;
height: 100%;

@media (min-width:320px) and (max-width: 425px){
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80vh;
}
@media (min-width: 426px) and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 93vh;
}

@media screen and (min-width: 1280px){
    gap: 0rem;
    padding-bottom: 4rem;
}

@media screen and (min-width: 2230px){
    min-height: 1080px;
}

`;
