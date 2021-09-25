import styled from 'styled-components'

export const Container = styled.footer`
    display: flex;
    height: 100%;
    @media (min-width:320px) and (max-width: 425px){
        flex-direction: column;
        justify-content: center;
    }
`;