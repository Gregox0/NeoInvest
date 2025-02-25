import { styled, createGlobalStyle } from 'styled-components'
import { useState,useEffect } from 'react'
import { useAuth } from "../context/AuthContext"

import Input from '../components/Input'
import Table from '../components/Table'
import Button from '../components/Button'
import Loading from '../components/Loading'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Neutra';
    src: url(/fonts/neutra.otf) format('opentype');
  }

  @font-face {
    font-family: 'Sf-pro';
    src: url(fonts/SFPro.ttf) format('truetype');
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Neutra';
  }
`

const Side = styled.div`
    margin: 5%;
    width: 250px;
`

const ASide = styled.div`
    margin-top: 5%;
    width: 500px;
`

const Title = styled.div`
    margin-bottom: 20px;
`

const StyledContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
`

const Cad = styled.div`
    margin-bottom: 20px;
`

export default function Teste() {
    const { userId } = useAuth()
    const [loading, setLoading] = useState(false)

    const [ticker, setTicker] = useState('')
    const [dados, setDados] = useState({
        th: ["Empresa", "Ticket", 'Preço', 'Variação'],
        tb: []
    })

    const handleSubmit = async () => {
        setLoading(true)
        try {
            const response = await fetch(`http://localhost:5555/stock/${ticker}?userId=${userId}`)
            const data = await response.json()


            setDados(prevState => ({
                ...prevState,
                tb: [
                    ...prevState.tb,
                    {
                        empresa: data.companyName, 
                        ticket: data.symbol,
                        preco: data.currentPrice,
                        variacao: data.appreciation
                    }
                ]
            }))
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.error('Erro ao buscar dados da ação:', error)
        }
    }
    const fetchUserStocks = async () => {       
        try {
            const response = await fetch(`http://localhost:5555/stocks?userId=${userId}`)
            const data = await response.json()

            setDados(prevState => ({
                ...prevState,
                tb: data.map(stock => ({
                    empresa: stock.companyName,
                    ticket: stock.symbol,
                    preco: stock.currentPrice,
                    variacao: stock.appreciation
                }))
            }))
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.error('Erro ao buscar as ações do usuário:', error)
        }
    }

    useEffect(() => {
        setLoading(true)
        if (userId) {
            fetchUserStocks()
        }
    }, [userId])
    return (
        <StyledContainer>
            <GlobalStyle />
            {loading && (<Loading/>)}
            <Side>
                <Title>
                    <h1>Nós conte mais</h1>
                    <p>Precisamos de algumas informações extras para prepararmos tudo pra você</p>
                </Title>
                <Cad>
                    <Input
                        label='Ticket'
                        type='text'
                        value={ticker}
                        onChange={(e) => setTicker(e.target.value)}
                    />
                </Cad>
                <Button text='Próximo' onClick={handleSubmit} />
            </Side>
            <ASide>
                <Table dados={dados} />
            </ASide>
        </StyledContainer>
    )
}
