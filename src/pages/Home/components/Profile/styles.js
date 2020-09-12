import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px 50px;
`
export const Disconect = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;

    .sign-out {
        font-size: 18px;
    }
`
export const Profile = styled.div`

`
export const Avatar = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 50px;

    img {
        max-width: 150px;
        border-radius: 100%;
        cursor: pointer;
    }
    p {
        margin: 20px 0;
    }
`
