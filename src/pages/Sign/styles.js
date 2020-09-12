import styled from 'styled-components'

import BackgroundImage from '../../assets/images/background/UltraVioletGalactic.svg'
import StarsGif from '../../assets/images/gifs/stars.gif'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${BackgroundImage});
    background-size: cover;
    display: grid;
    grid-template-columns: 3fr 9fr;
    grid-template-areas: "main .";
    align-content: center;

    @media screen and (min-width: 300px) {
        grid-template-columns: .5fr 11fr .5fr;
        grid-template-areas: ". main .";
    }
    @media screen and (min-width: 599px) {
        grid-template-columns: 3fr 6fr 3fr;
        grid-template-areas: ". main .";
    }
    @media screen and (min-width: 999px) {
        grid-template-columns: 4fr 8fr;
        grid-template-areas: "main .";
    }
`
export const Stars = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${StarsGif});
    position: fixed;
    opacity: .5;
`
export const Main = styled.main`
    grid-area: main;
    background: white;
    margin: 30px;
    padding: 40px 20px;
    border-radius: 10px;
    opacity: .9;
    z-index: 1;
`
