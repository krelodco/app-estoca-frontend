import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Whisper, Tooltip, Input, Button } from 'rsuite'

import { Form } from './styles'

class Up extends Component {
    render() {
        return(
            <Form>
                <Whisper trigger="focus" speaker={<Tooltip>Necessário</Tooltip>}>
                    <Input type="text" placeholder="Nome completo" required={true} />
                </Whisper>
                <Whisper trigger="focus" speaker={<Tooltip>Necessário</Tooltip>}>
                    <Input type="email" placeholder="Email" required={true} />
                </Whisper>
                <Whisper trigger="focus" speaker={<Tooltip>Necessário</Tooltip>}>
                    <Input type="password" placeholder="Senha" required={true} />
                </Whisper>
                <Button type="submit" color="violet" block>Cadastrar</Button>
                <p>Já possui uma conta? <Link to="/signin">Entre</Link></p>
            </Form>
        )
    }
}

export default Up
