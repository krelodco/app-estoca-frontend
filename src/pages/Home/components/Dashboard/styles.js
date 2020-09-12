import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
`
export const Title = styled.h3`
    
`
export const Welcome = styled.section`
    margin-top: 30px;
    width: 100%;
    background: linear-gradient(to right, #00c4cc, #7d2ae8);
    padding: 20px 40px;
    border-radius: 14px;
    opacity: .8;
    display: grid;
    grid-template-columns: 5fr 7fr;
    grid-template-areas: "message vector";
`
export const Message = styled.div`
    color: white;
    grid-area: message;
`
export const Hi = styled.h4`
    letter-spacing: 1px;
    font-weight: 400;
`
export const Goals = styled.p`
    margin-top: 20px;
`
export const Vector = styled.img`
    grid-area: vector;
    max-width: 100%;
    display: fixed;
    margin-top: -60px;
`
export const DataContainer = styled.section`
    display: grid;
    grid-template-columns: 5fr 7fr;
    grid-template-areas: "products daily";
    grid-gap: 20px;
    margin-top: 20px;
    border-radius: 14px;
`
export const EndingProducts = styled.div`
    grid-area: products;
    background: white;
    padding: 20px 20px;
    border-top-left-radius: 14px;
    border-bottom-left-radius: 14px;
    width: 100%;
    height: 100%;
`
export const DailyCharts = styled.div`
    grid-area: daily;
    background: white;
    padding: 20px 20px;
    border-top-right-radius: 14px;
    border-bottom-right-radius: 14px;
    width: 100%;
    height: 100%;
`
export const HorizontalChart = styled.div`
    width: '100%';
    display: flex;
    justify-content: space-between;
    align-items: center;
`
