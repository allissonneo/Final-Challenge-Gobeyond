import styled from 'styled-components'

export const Container = styled.div`
    background: var(--white);
    display: flex;
    flex-direction: row;
    min-width: 10%;
    width: 100%;
    max-width: 40%;
    gap: 5rem;
    margin-left: 5rem;
    .divPai{
        display: grid;
        padding-top: 2rem;
        padding-bottom: 2rem;
        .parteLogo{
            margin-top: 1.25rem;
            display: grid;
            font-size: 0.75rem;
        }
    }
    .socialMediaIcon{
        width: 1rem;
        height: 1rem;
    }
        .socialMedia{
            max-width: 5rem;
            margin-top: 1.25rem;
            margin-bottom: 5rem;
            display: flex;
            justify-content: space-between;
        }
        @media only screen and (min-width: 1920px){
            .divPai{
            display: grid;
            padding-top: 4rem;
            padding-bottom: 4rem;
            .parteLogo{
            margin-top: 1.25rem;
            display: grid;
            font-size: 0.75rem;
        }
    }
}
@media (min-width:320px) and (max-width: 425px){
    justify-content: center;
    min-width: 50vw;
    .divPai{

        /* padding-top: 4rem; */
        padding-bottom: 20vh;
        .parteLogo{
            margin-left: 50vw;
        }
        .socialMedia{
            margin-left: 58vw;
        }
    }
    
}
@media only screen and (min-width: 860px){
    gap: 0;
            .divPai{
            display: grid;
            padding-top: 4rem;
            padding-bottom: 4rem;
            .parteLogo{
            margin-top: 1.25rem;
            display: grid;
            font-size: 0.75rem;
        }
    }
}
@media only screen and (max-width: 800px){
    margin:0;
}
`;