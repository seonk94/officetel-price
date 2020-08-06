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
  border-bottom: 2px solid #000;
  input {
    border: none;
    font-size: 32px;

    &:focus {
      outline: none;
    }
  }
`

function NameInputField({ setName, searchName }: InputNameProps) {

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      searchName()
    }
  }

  return (
    <NameFieldBox>
      <span>
        I AM
      </span>
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
