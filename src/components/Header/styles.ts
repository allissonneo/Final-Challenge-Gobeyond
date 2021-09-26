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

    nav{
        
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
        
    }
    @media screen and (max-width: 800px){
        nav{
            display: none;
        }
        .one,
        .two,
        .three{
            background-color: var(--white);
            height: 5px;
            width: 100%;
            margin: 6px auto;

            transition-duration: 0.3s;
        }
        .menuToggle{
            width: 40px;
            height: 30px;
            margin-right: 20px;
        }

        .menuSection.on{
            position: absolute;
            top: 0;
            left: 0;
            background: var(--greyLight);
            width: 100vw;
            height: 100vh;
            z-index: 10;
            display: flex;
            justify-content: center;
            align-items: center;
            nav{
                display: block;
                .anchorHeader{
                    text-align: center;
                    display: block;
                    transition-duration: 0.5s;
                    font-size: 2.5rem;
                    line-height: 10rem;
                    display: block;
                    
                }
            }
            .menuToggle{
                position: absolute;
                right: 5px;
                top: 45px;
                .one{
                    transform: rotate(45deg) translate(7px, 7px);
                }
                .two{
                    opacity: 0;
                }
                .three{
                    transform: rotate(-45deg) translate(8px, -9px);
                }
            }
        }
        
    }
`;

