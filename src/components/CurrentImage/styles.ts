import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: auto;
    max-width: 1130px;
    position: relative;
    margin: auto;
    .borderImage{
        max-width: 980px;
        width:auto;
        object-fit: cover;

        .imgCurrent{
            border-radius: 0.625rem;
            width: 100%;
        }
    }

 @media only screen and (max-width: 1430px) {  
    margin: auto 1rem auto auto;
    .borderImage{
            min-width: 500px;
            max-width: 980px;                                                                      
            width: auto;
            height: 500px;
        .imgCurrent{
            border-radius: 0.625rem;
            width: 100%;
            height: 100%;
        }
    }
  }

 @media screen and (min-width: 1440px){
        max-width: 1200px;
        margin: auto 1rem auto auto;
        .borderImage{
            min-width: 800px;
            max-width: 980px;                                                                      
            width: auto;
            height: 600px;

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
            min-width: 800px;
            max-width: 1200px;                                                                      
            width: auto;
            height: 700px;

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
            min-width: 1600;
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