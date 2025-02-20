import { styled, createGlobalStyle } from 'styled-components'
import { useState } from 'react'

import Input from './components/Input'
import Button from './components/Button'
import ForgotPassword from './components/ForgotPassword'
import Google from './components/icons/Google'
import Twitter from './components/icons/Twitter'

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

const StyledTitle = styled.div`
  height: 30vh;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 15px;

  background-color: #;

  h1{
    color: #fff;
  }
  img{
    height: 65px;
    width: 65px;
  }
  @media (min-width: 868px) {
    width: 30vw;
    height: 60vh;

    border-radius: 30px 0 0 30px;

  }
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  border-radius: 30px 30px 0 0;

  @media (min-width: 868px) {
    width: 30vw;
    height: 60vh;

    border-radius: 0 30px 30px 0;
    box-shadow: 0 15px 30px rgba(0,0,0,0.3)
  }
`

const InputContainer = styled.div`
  margin-top: 10%;
`

const P = styled.p`
  margin-top: 10px;
  span{
    color: #0A5DA6;

    cursor: pointer;
  }
`

const Container = styled.div`
  margin-bottom: 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 250px;

  font-size: 12px;
`

const InputCheckbox = styled.div`
  display: flex;
  align-items: center;

  gap: 5px;

  input{
    cursor: pointer;
  }
`

const LogIcons = styled.div`

`

const Wrapper = styled.div`
  @media (min-width: 868px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`

function App() {
  const [isCad, setIsCad] = useState(false)

  const toggle = () => setIsCad(prev => !prev)

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <StyledTitle>
          <h1>{ !isCad ? (<>Bem-vindo <br/>de volta!</>) : (<>Junte-se <br/> a nós</>) }</h1>
          <img src="imgs/logo.png" alt="Logo" width="100" />
        </StyledTitle>

        <StyledContainer>
          <InputContainer>
            <Input
              type = 'text'
              label = 'Nome'
            />
            {isCad && (
              <Input
                type = 'email'
                label = 'Email'
                isCad = { isCad }
              />
            )}
            <Input
              type = 'password'
              label = 'Senha'
            />
          </InputContainer>

          {!isCad && (
            <Container>
              <InputCheckbox>
                <label>Lembrar de mim</label>
                <input type="checkbox" />
              </InputCheckbox>
              <ForgotPassword/>
            </Container>
          )}

          <Button
            text = { !isCad ? 'Entrar' : 'Cadastrar' }
          />

          <P>{ !isCad ? (<>Ainda não tem uma conta? <span onClick = {toggle}>Clique aqui</span></>) : (<>Já tem uma conta? <span onClick = {toggle}>Clique aqui</span></> )}</P>

          <LogIcons>
            <Google/>
            <Twitter/>
          </LogIcons>
        </StyledContainer>
      </Wrapper>
    </>
  )
}

export default App