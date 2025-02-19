import { useState } from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
  margin-top: 15px;
  position: relative;
  
  display: flex;
  align-items: center;
`

const Line = styled.div`
  width: 5px;
  height: 35px;
  
  position: absolute;
  
  background-color: #0A5DA6;
  border-radius: 3px 0 0 3px;
  transition: transform 0.3s ease-in-out;

  ${({ $isFocused }) => $isFocused && `transform: translateX(-5px);`}
`

const InputContainer = styled.div`
  padding: 5px;

  height: 35px;
  width: 250px;
  
  border: 2px solid #ccc;
  background-color: #fff;
  
  z-index: 2;
`

const StyledInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
`
const StyledLabel = styled.label`
  margin: 5px;

  position: absolute;

  z-index: 3;
`
export default function Input({ type, onChange, value, label }) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <StyledContainer>
      <Line $isFocused={isFocused} />
      <StyledLabel> { label } </StyledLabel>
      <InputContainer>
        <StyledInput
          value={value}
          onChange={onChange}
          type = { type }
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </InputContainer>
    </StyledContainer>
  )
}
