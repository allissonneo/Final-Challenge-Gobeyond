import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #FFFFFF;
        --black: #000000;
        --greyLight: #707070;
        --greyMedium: #F4F4F4;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url('../assets/fonts/Montserrat-Medium.ttf') format('truetype');
        font-weight: 500;
        font-display: swap;
    }
    @font-face {
        font-family: 'Montserrat';
        src: url('../assets/fonts/Montserrat-SemiBold.ttf') format('truetype');
        font-weight: 600;
        font-display: swap;
    }
    @font-face {
        font-family: 'Montserrat';
        src: url('../assets/fonts/Montserrat-Bold.ttf') format('truetype');
        font-weight: 700;
        font-display: swap;
    }

    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    html{
        @media (max-width: 1080px) {
            font-size: 93.75%
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button, p {
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
    }
    header{
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
    }

    h1,h2,h3,h4,h5,h6{
        font-weight: 500;
    }

    strong {
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`