import React from 'react'

import { Container, SidenavArea, SidenavControl, BrandLogo, Logo, AccountType,  Main, Aside } from './styles'

import { Sidenav, Nav, Icon, Button } from 'rsuite'

import Dashboard from './components/Dashboard'
import Profile from './components/Profile'

const Home = () => {
    return(
        <Container>
            <SidenavArea>
                <Sidenav defaultOpenKeys={['3', '4']} activeKey="1">
                    <Sidenav.Body>
                        <SidenavControl>
                            <BrandLogo>
                                <Logo>ESTOCA</Logo>
                            </BrandLogo>
                            <Nav>
                                <Nav.Item eventKey="2" className="selected" icon={<Icon icon="dashboard" />}>
                                    Dashboard
                                </Nav.Item>
                            </Nav>
                            <AccountType>
                                <p>
                                    Atualize para <b>PRO</b> para ter acesso a mais recursos
                                </p>
                                <Button color="blue" block>Atualizar</Button>
                            </AccountType>
                        </SidenavControl>
                    </Sidenav.Body>
                </Sidenav>
            </SidenavArea>
            <Main>
                <Dashboard />
            </Main>
            <Aside>
                <Profile />
            </Aside>
        </Container>
    )
}

export default Home
