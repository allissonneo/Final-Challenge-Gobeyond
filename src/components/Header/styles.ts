import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    margin: 0 auto;
    background: var(--black);
    .logoBrancaImg{
        margin: 0;
        font-size: 0;
    }
    `;


export const Content = styled.div`
    justify-content: space-between;
    display:flex;
    margin: 0 0 0 5rem;
    padding: 3rem 0rem 1rem;
    @media (min-width:320px) and (max-width: 425px){
        /* background: rebeccapurple; */
        margin: 0;
        
        .anchorHome{
            /* background: red; */
            max-width: 15vh;
            height: 5vh;
            .logoBranca{
                margin-left: 5vw;
                width: 100%;
            }

        }
    }
    
`;

export const MenuComponent = styled.div`
    display:flex;
    align-items: flex-start;
        a{
            display: inline;
            text-decoration: none;
            color: var(--white);
            font-weight: 600;
            font-size: 25px;
            margin: 0 3rem 0 0;
        }
        .anchorHeader:hover{
            color: var(--greyLight);
            padding-bottom: 1rem;
            border-bottom: 2px solid var(--white);
    }
    
    @media screen and (max-width: 800px){
        display: none;
    }
`;
