import styled from 'styled-components'
import Input from './Input'
import Button from './Button'
import { useState } from 'react'

const P = styled.p`
  color: #0A5DA6;
  cursor: pointer;
`

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  
  width: 100%;
  height: 100%;
  
  display: ${(props) => props.toggle ? 'flex' : 'none'};  // Corrigida a sintaxe
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`

const StyledContainer = styled.div`
  position: relative;
  
  height: 40%;
  width: 80%;

  display: flex;
  align-items: center;
  flex-direction: column;
  
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 15px 30px rgba(0,0,0,0.3);
`

const StyledHeader = styled.div`
  margin: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: small;
`

const Content = styled.div`
  height: 100%;
  display: flex; 
  flex-direction: column;
  justify-content: center;
`
const HeaderTextContainer = styled.div``
export default function ForgotPassword(){
  const [display, setDisplay] = useState(false)
  const toggle = () => setDisplay(prev => !prev)  

  return(
    <>
      <P onClick={toggle} >Esqueceu a senha?</P>
      <Wrapper toggle={display}>
        <StyledContainer>
          <StyledHeader>
            <HeaderTextContainer>
              <h1>Recuperar senha</h1>
              <p>Informe seu email para receber um link de recuperação</p>
            </HeaderTextContainer>
            <h1 onClick = {toggle}>X</h1>
          </StyledHeader>
          <Content>
            <Input
              type='email'
              label='Email'
            />
            <Button
              text='Enviar'
            />
          </Content>    
        </StyledContainer>
      </Wrapper>
    </>
  )
}
