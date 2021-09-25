import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    justify-content: center;
    .menuFooter{
        border-bottom: 1px solid;
        margin: 10px;
        font-size: 0.75rem;
        text-decoration: none;
        color: var(--black);
    }
    @media (max-width: 800px){
        width: 100%;
        position: absolute;
        background: var(--white);
        top: 120vh;
        left: 0vw;
        height: 20%;
        text-align: center;
    }
`;