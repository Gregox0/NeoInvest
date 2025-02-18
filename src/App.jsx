import { styled, createGlobalStyle } from 'styled-components'

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
  }

  body {
    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #1E1F20;
  }
`;

const StyledTitle = styled.div`
  height: 20vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 15px;

  h1{
    color: #F0F2EF;
    font-family: 'Neutra'
  }
  img{
    height: 65px;
    width: 65px;
  }
`;

const StyledContainer = styled.div`
  height: 80vh;
  width: 100vw;

  background-color: #F0F2EF;
  border-radius: 30px 30px 0 0;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledTitle>
        <h1>Bem-vindo <br/>de volta!</h1>
        <img src="imgs/logo.png" alt="Logo" width="100" />
      </StyledTitle>
      <StyledContainer>
      </StyledContainer>
    </>
  );
}

export default App;