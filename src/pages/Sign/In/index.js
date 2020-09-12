import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Whisper, Tooltip, Input, Button } from 'rsuite'

import { Form } from './styles'

class In extends Component {
    render() {
        return(
            <Form>
                <Whisper trigger="focus" speaker={<Tooltip>Necessário</Tooltip>}>
                    <Input type="email" placeholder="Email" required={true} />
                </Whisper>
                <Whisper trigger="focus" speaker={<Tooltip>Necessário</Tooltip>}>
                    <Input type="password" placeholder="Senha" required={true} />
                </Whisper>
                <Button type="submit" color="violet" block>Entrar</Button>
                <p>Não possui uma conta? <Link to="/signup">Crie agora</Link></p>
            </Form>
        )
    }
}

export default In
