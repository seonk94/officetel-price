import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { ThemeDispatch } from '@/src/App';

interface InputNameProps {
  setName: React.Dispatch<React.SetStateAction<string>>;
  searchName: () => Promise<void>;
}

const NameFieldBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin-right: 16px;
    font-size: 32px;
  }

  i {
    font-size: 26px;
    z-index: 2;
    color: ${props => props.theme.colors.mainTextColor};

    &:hover {
        cursor : pointer;
        color: #ddd;
    }
  }
`

const NameInput = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${props => props.theme.colors.mainTextColor};
  input {
    border: none;
    font-size: 32px;
    width: 30vh;
    color: ${props => props.theme.colors.mainTextColor};

    &:focus {
      outline: none;
    }
  }
`

const IAmSpan = styled.span`
  min-width: 60px;
  color: ${props => props.theme.colors.mainTextColor};
`

function NameInputField({ setName, searchName }: InputNameProps) {


  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      searchName()
    }
  }

  return (
    <ThemeDispatch.Consumer>
      {(theme) => (
        <ThemeProvider theme={theme}>
          <NameFieldBox>
            <IAmSpan>
              I AM
            </IAmSpan>
            <NameInput>
              <input
                onChange={({ target: { value } }) => setName(value)}
                onKeyPress={handleKeyPress} />
              <i className="fas fa-search" onClick={searchName}></i>
            </NameInput>
          </NameFieldBox>
        </ThemeProvider>
      )}
    </ThemeDispatch.Consumer>
  )
}
export default NameInputField;
