import React from 'react'

import { MdExitToApp } from 'react-icons/md'

import { Container, Disconect, Profile as ProfileContent, Avatar } from './styles'

import {  } from 'rsuite'

import ProfilePhoto from '../../../../assets/images/pp.jpg'

const Profile = () => {

    return(
        <Container>
            <Disconect>
                <span><b>Desconectar</b></span>
                <MdExitToApp className="sign-out" />
            </Disconect>
            <ProfileContent>
                <Avatar>
                    <img src={ ProfilePhoto } alt="Imagem do usuário" />
                    <p>
                        <h5>Pedro Henrique</h5>
                        <small>Krelod Co.</small>
                    </p>
                </Avatar>
            </ProfileContent>
        </Container>
    )
}

export default Profile
