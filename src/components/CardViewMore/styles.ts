import styled from 'styled-components';

export const Container = styled.div`
    max-width: 37.5rem;
    background: var(--black);
    color: var(--white);
    display: grid;
    
    h1 {
        text-align: left;
        margin: 5rem 3rem 0 5rem;
        font-size: 60px;
        font-weight: 600;
    }
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.25rem;
        width: 13.75rem;
        height: 3.75rem;
        border-radius: 3.125rem;
        margin: 3rem 0 5rem 5rem;
        font-size: 1.25rem;
        &:hover{
            filter: brightness(1.1);
        }
        .arrowRightImg{
            height: 1.25rem;
            width: 1.25rem;
        }
    }
`