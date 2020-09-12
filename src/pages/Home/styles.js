import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 250px auto 350px;
    grid-template-areas: "sidenav main aside";
`
export const SidenavArea = styled.aside`
    grid-area: sidenav;
    border-right: 1px solid #eeeef3;
    position: fixed;
    width: 250px;
    height: 100%;
    overflow-x: hidden;
`
export const SidenavControl = styled.div`
    background: white;
    height: 100vh;
    display: grid;
    align-content: space-between;

    .selected {
        border-right: 3px solid #2196f3;
    }
`
export const BrandLogo = styled.div`
    text-align: center;
`
export const Logo = styled.h3`
    margin: 20px 0;
`
export const AccountType = styled.div`
    margin: 20px;
    padding: 20px;
    background: #f5f5fb;
    border-radius: 10px;
    
    p {
        text-align: center;
        color: black;
    }
    button {
        margin-top: 20px;
    }
`
export const Main = styled.main`
    grid-area: main;
    background: #f5f5fb;
    padding: 20px 50px;
`
export const Aside = styled.aside`
    grid-area: aside;
    width: 350px;
    height: 100%;
    overflow-x: hidden;
`