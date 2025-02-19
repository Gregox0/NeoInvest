import styled from 'styled-components'

const StyledButton = styled.button`
  margin-top: 15px;
  padding: 10px;

  width: 250px;

  background-color: #0A5DA6;
  color: #fff;
  border: none;
`

export default function Button({ text }){
  return(
    <>
      <StyledButton>
        { text }
      </StyledButton>
    </>
  )
}