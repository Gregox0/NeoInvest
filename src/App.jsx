
import { styled, createGlobalStyle } from 'styled-components'
import { useState } from 'react'

import Input from './components/Input'
import Button from './components/Button'
import ForgotPassword from './components/ForgotPassword'
import Google from './components/icons/Google'
import Twitter from './components/icons/Twitter'

import { auth,db } from './firebase.js'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc, getDoc } from "firebase/firestore";

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

  background-color: #1E1F20;

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


  const [errorNome, setErrorNome] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorSenha, setErrorSenha] = useState(false)

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  let data
  
  const toggle = () => setIsCad(prev => !prev)

  const verify = () => {
    if(nome.length == 0){
      setTimeout(() => setErrorNome(false), 1000)
      setErrorNome(true)
      return
    }
    if(isCad && email.length == 0){
      setTimeout(() => setErrorEmail(false), 1000)
      setErrorEmail(true)
      return
    }
    if(senha.length == 0){
      setTimeout(() => setErrorSenha(false), 1000)
      setErrorSenha(true)
      return
    }
    if(isCad){
      data = {
        nome: nome,
        email: email,
        senha: senha
      }
    }else{
      data = {
        nome: nome,
        senha: senha
      }
    }
    if(!isCad){
      log()
    }else{
      cad()
    }
  }

  const log = async () => {
    try{
      const UserCredential = await signInWithEmailAndPassword(auth, data.email, data.senha);
      const user = UserCredential.user
    }
    catch(error){
      setTimeout(() => setErrorEmail(false), 1000)
      setErrorEmail(true)
      return
    }
  }

  const cad = async () => {
    try{
      const UserCredential = await createUserWithEmailAndPassword(auth, data.email, data.senha);
      const user = UserCredential.user

      await setDoc(doc(db, "users", user.uid),{
        name: data.nome,
        email: data.email,
      })
    } 
    catch(error){
      if (error.code == 'auth/email-already-in-use'){
        setTimeout(() => setErrorEmail(false), 1000)
        setErrorEmail(true)
        return
      }
    }
  }


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
              type = 'email'
              label = 'Email'

              error = {errorEmail}
              value = {email}
              onChange = {(e) => setEmail(e.target.value)}

            />
            {isCad && (
              <Input
                type = 'text'
                label = 'Nome'
                isCad = { isCad }


                error = {errorNome}
                value = {nome}
                onChange = {(e) => setNome(e.target.value)}

              />
            )}
            <Input
              type = 'password'
              label = 'Senha'


              error = {errorSenha}
              value = {senha}
              onChange = {(e) => setSenha(e.target.value)}

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

            onClick = {verify}

          />

          <P>{ !isCad ? (<>Ainda não tem uma conta? <span onClick = {toggle}>Clique aqui</span></>) : (<>Já tem uma conta? <span onClick = {toggle}>Clique aqui</span></> )}</P>

          <LogIcons>
            {/* <Google/>
               <Twitter/> */}
          </LogIcons>
        </StyledContainer>
      </Wrapper>
    </>
  )
}

export default App
