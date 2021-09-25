import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: auto;
    max-width: 1130px;
    position: relative;
    margin: auto;
    .borderImage{
        max-width: 60vw;
        width:auto;
        object-fit: cover;

        .imgCurrent{
            border-radius: 0.625rem;
            width: 100%;
        }
    }

    @media (max-width: 800px){
        display: flex;
    width: auto;
    max-width: 75vw;
    position: absolute;
    margin: auto;
    top: 40vh;
        .borderImage{
            min-width: 20vw;
            max-width: 100vw;                                                                      
            width: auto;
            height: 40vh;
            object-fit: cover;
        .imgCurrent{
            border-radius: 0.625rem;
            width: 100%;
            height: 100%;
        }
    }
    
    }

 @media only screen and (min-width: 1430px) {  
    margin: auto 1rem auto auto;
    .borderImage{
            min-width: 30vw;
            max-width: 80vw;                                                                      
            width: auto;
            height: 40vh;
            object-fit: cover;
        .imgCurrent{
            border-radius: 0.625rem;
            width: 100%;
            height: 100%;
        }
    }
  }

 @media screen and (min-width: 1440px){
        max-width: 50vw;
        margin: auto 1rem auto auto;
        .borderImage{
            min-width: 30vw;
            max-width: 70vw;                                              
            width: auto;
            height: 70vh;

        .imgCurrent{
            border-radius: 0.625rem;
            width: 100%;
            height: 100%;
        }
    } 
 }

 @media screen and (min-width: 1920px){
        max-width: 1200px;
        margin: auto 1rem auto auto;
        .borderImage{
            min-width: 40vw;
            max-width: 100vw;                                                                      
            width: auto;
            height: 70vh;

        .imgCurrent{
            border-radius: 0.625rem;
            width: 100%;
            height: 100%;
        }
    } 
 }

 

    @media screen and (min-width: 2230px){
        max-width: 1650px;
        .borderImage{
            min-width: 20vw;
            min-width: 1080px;
            max-height: 1080px;
            max-width: 1800px;
            
            width: 1800px;


        .imgCurrent{
            border-radius: 0.625rem;
            width: 100%;
            height: 100%;
        }
    }
}
`;