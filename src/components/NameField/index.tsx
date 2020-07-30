import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { RightSlideReturn } from '../../style/animation';

interface NameFieldProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  searchName: () => Promise<void>;
}

interface NameBoxProps {
  render: boolean;
}

const NameBox = styled.div<NameBoxProps>`
    display: flex;
    padding: 0 10px;
    margin: auto;
    align-items: center;
    color: #ddd;
    position: relative;
    background: transparent;
    width: 30%;
    height: fit-content;

    &:after {
      content: '';
      box-sizing: inherit;
      position: absolute;
      border: 2px solid transparent;
      width: 0;
      height: 0;
      bottom: -2px;
      right: -2px;
      z-index: 1;
    }

    &:before {
      content: '';
      border-top-color: #ddd;
      border-right-color: #ddd;
      box-sizing: inherit;
      content: '';
      position: absolute;
      border: 2px solid transparent;
      width: 0;
      height: 0;
      top: -2px;
      left: -2px;
      z-index: 1;
    }


    ${(props: NameBoxProps) => props.render && BorderTransition}

    input {
        width: 100%;
        height: 36px;
        font-size: 20px;
        border: none;
        z-index: 2;

        &:focus {
            outline: none;
        }
    }

    i {
        font-size: 26px;
        z-index: 2;
        animation: ${RightSlideReturn} 1.5s ease;

        &:hover {
            cursor : pointer;
            color: #ddd;
        }
    }
`

const BorderTransition = css`

    color: #000;
    &:before {
      height: 100% !important;
      width: 100% !important;
      border-top-color: #000;
      border-right-color: #000;
      transition: width 0.25s ease-out, height 0.25s ease-out 0.25s;
    }
    &:after {
      height: 100% !important;
      width: 100% !important;
      border-bottom-color: #000;
      border-left-color: #000;
      transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s, height 0.25s ease-out 0.75s;
    }

`

function NameField({ name, setName, searchName }: NameFieldProps) {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      searchName()
    }
  }

  const [render, setRender] = useState(false);
  useEffect(() => {
    setRender(true);
  }, [])

  return (
    <NameBox render={render}>
      <input
        onChange={({ target: { value } }) => setName(value)}
        onKeyPress={handleKeyPress}
      />
      <i className="fas fa-search" onClick={searchName}></i>
    </NameBox>
  )
}

export default NameField;
