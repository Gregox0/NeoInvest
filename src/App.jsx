import { styled, createGlobalStyle } from 'styled-components'

import Input from './components/Input'
import Button from './components/Button'
import ForgotPassword from './components/ForgotPassword'

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

  body {
    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #1E1F20;
  }
`

const StyledTitle = styled.div`
  height: 20vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 15px;

  h1{
    color: #fff;
  }
  img{
    height: 65px;
    width: 65px;
  }
`

const StyledContainer = styled.div`
  height: 80vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fff;
  border-radius: 30px 30px 0 0;
`

const InputContainer = styled.div`
  margin-top: 10%;
`

const P = styled.p`
  span{
    color: #0A5DA6;

    cursor: pointer;
  }
`

const Container = styled.div`
  margin: 10px;

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
function App() {
  return (
    <>
      <GlobalStyle />
      <StyledTitle>
        <h1>Bem-vindo <br/>de volta!</h1>
        <img src="imgs/logo.png" alt="Logo" width="100" />
      </StyledTitle>
      <StyledContainer>
        <InputContainer>
          <Input
            type = 'text'
            label = 'Nome'
          />
          <Input
            type = 'password'
            label = 'Senha'
          />
        </InputContainer>
        <Container>
          <InputCheckbox>
            <label>Lembrar de mim</label>
            <input type="checkbox" />
          </InputCheckbox>
          <ForgotPassword/>
        </Container>
        <Button
          text = 'Entrar'  
        />
        <P>Ainda não tem uma conta? <span>Clique aqui</span></P>
      </StyledContainer>
    </>
  )
}

export default App