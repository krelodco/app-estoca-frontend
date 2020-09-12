import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Title, Welcome, Message, Hi, Goals, Vector, DataContainer, EndingProducts, DailyCharts, HorizontalChart } from './styles'

import { Icon, Progress, Dropdown } from 'rsuite'

import BusinessImage from '../../../../assets/images/vectors/4380.png'

const Dashboard = () => {
    const { Line } = Progress

    return(
        <Container>
            <Title>Dashboard</Title>
            <Welcome>
                <Message>
                    <Hi>Bem vindo de volta Pedro</Hi>
                    <Goals>
                        Suas vendas desse mês foram 80% maior que o mês passado.
                        <br />
                        Continue trabalhando para conseguir resultados ainda maiores!
                    </Goals>
                </Message>
                <Vector src={ BusinessImage } alt="Business" />
            </Welcome>
            <DataContainer>
                <EndingProducts>
                    <div style={{
                        width: '100%',
                        Height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 10
                    }}>
                        <small><b>Produtos acabando</b></small>
                        <Link to="/home"><small style={{ marginRight: 10 }}><b>Todos</b></small><Icon icon="long-arrow-right" /></Link>
                    </div>
                    <div style={{ marginTop: 20, alignItems: 'center' }}>
                        <HorizontalChart>
                            <span>Ração</span>
                            <Line percent={12} strokeColor="tomato" style={{ justifySelf: 'right' }} />
                        </HorizontalChart>
                        <HorizontalChart>
                            <span>Gaiola</span>
                            <Line percent={24} strokeColor="tomato" style={{ justifySelf: 'right' }} />
                        </HorizontalChart>
                        <HorizontalChart>
                            <span>passarinho</span>
                            <Line percent={31} strokeColor="tomato" style={{ justifySelf: 'right' }} />
                        </HorizontalChart>
                        <HorizontalChart>
                            <span>Petiscos</span>
                            <Line percent={33} strokeColor="tomato" style={{ justifySelf: 'right' }} />
                        </HorizontalChart>
                    </div>
                </EndingProducts>
                <DailyCharts>
                    <div style={{
                        width: '100%',
                        Height: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <small><b>Meta de vendas</b></small>
                        <Dropdown title="Semanal">
                            <Dropdown.Item>Semanal</Dropdown.Item>
                            <Dropdown.Item>Mensal</Dropdown.Item>
                        </Dropdown>
                    </div>
                    <div style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <div style={{ 
                            display: 'inline-block',
                            textAlign: 'center'
                        }}>
                            <span>Seg</span>
                            <Line percent={ 80 } vertical />
                        </div>
                        <div style={{ 
                            display: 'inline-block',
                            textAlign: 'center'
                        }}>
                            <span>Ter</span>
                            <Line percent={ 61 } vertical />
                        </div>
                        <div style={{ 
                            display: 'inline-block',
                            textAlign: 'center'
                        }}>
                            <span>Qua</span>
                            <Line percent={ 47 } vertical />
                        </div>
                        <div style={{ 
                            display: 'inline-block',
                            textAlign: 'center'
                        }}>
                            <span>Qui</span>
                            <Line percent={ 32 } vertical />
                        </div>
                        <div style={{ 
                            display: 'inline-block',
                            textAlign: 'center'
                        }}>
                            <span>Sex</span>
                            <Line percent={ 130 } vertical />
                        </div>
                        <div style={{ 
                            display: 'inline-block',
                            textAlign: 'center'
                        }}>
                            <span>Sab</span>
                            <Line percent={ 97 } vertical />
                        </div>
                        <div style={{ 
                            display: 'inline-block',
                            textAlign: 'center',
                        }}>
                            <span>Dom</span>
                            <Line percent={ 0 } vertical />
                        </div>
                    </div>
                </DailyCharts>
            </DataContainer>
        </Container>
    )
}

export default Dashboard
