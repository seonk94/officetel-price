import React from 'react';
import styled from 'styled-components';

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

    &:hover {
        cursor : pointer;
        color: #ddd;
    }
  }
`

const NameInput = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid #000;
  input {
    border: none;
    font-size: 32px;
    width: 30vh;

    &:focus {
      outline: none;
    }
  }
`

const IAmSpan = styled.span`
  min-width: 60px;
`

function NameInputField({ setName, searchName }: InputNameProps) {

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      searchName()
    }
  }

  return (
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
  )
}
export default NameInputField;
