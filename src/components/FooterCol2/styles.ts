import styled from "styled-components";

export const Container = styled.div`
background: var(--greyMedium);
display: flex;
min-width: 65%;
width: -webkit-fill-available;
height: auto;
justify-content: space-between;


.Card{
      strong {
         font-size: 1.25rem;
      }
      font-size: 0.75rem;
     max-width: 25%;
     display: grid;
    margin: auto;
 }

 @media (min-width:320px) and (max-width: 425px){
    flex-direction: column;
    gap: 5vh;
    
    br {
       display:none;
      }
      .Card{
         max-width: 50vw;
         width: 100%;
         margin: 0;
         margin-left: 10vw;
    }
 }
`;