import { styled, createGlobalStyle } from 'styled-components'
import { useState } from 'react'

import Input from '../components/Input'
import Table from '../components/Table'
import Button from '../components/Button'

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
export default function Teste(){
    const [ticker, setTicker] = useState('')

    const handleSubmit = async () => {
        try {
          const response = await fetch(`http://localhost:5555/stock/${ticker}`)
          const data = await response.json()
          console.log(data)
        } catch (error) {
          console.error('Erro ao buscar dados da ação:', error)
        }
    }
    const dados = {
        th: ["Empresa", "Ticket", 'Preço', 'Variação'], 
        tb: []
    }
    return(
        <StyledContainer>
            <GlobalStyle/>
            <Side>
                <Title>
                    <h1>Nós conte mais</h1>
                    <p>Precisamos de algumas informações extras para prepararmos tudo pra você</p>
                </Title>
                <Cad>
                    <Input
                        label = 'Ticket'
                        type = 'text'
                        value = {ticker}
                        onChange = {(e) => setTicker(e.target.value)}
                    />

                </Cad>
                <Button text = 'Próximo' onClick={handleSubmit}/>
            </Side>
            <ASide>
                <Table dados = {dados}/>
            </ASide>
        </StyledContainer>
    )
}