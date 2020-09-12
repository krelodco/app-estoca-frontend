import React from 'react'
import { useLocation } from 'react-router-dom'

import { Container, Stars, Main } from './styles'

import {  } from 'rsuite'

import In from './In'
import Up from './Up'

const Sign = () => {
    const location = useLocation()

    return(
        <Container>
            <Stars></Stars>
            <Main>
                <h6>Bem vindo a</h6>
                <h1>Estoca</h1>
                { location.pathname === '/signin' ? <In /> : <Up /> }
            </Main>
        </Container>
    )
}

export default Sign
