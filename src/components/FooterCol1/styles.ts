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
    /* margin-right: 10rem; */
    .divPai{
        display: grid;
        .parteLogo{
            margin-top: 1.25rem;
            display: grid;
            font-size: 0.75rem;
        }
    }
        .socialMedia{
            max-width: 5rem;
            margin-top: 1.25rem;
            margin-bottom: 5rem;
            display: flex;
            justify-content: space-between;
        }
`;