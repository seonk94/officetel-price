import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { RightSlideReturn } from '../../style/animation';

interface NameFieldProps {
  setName: React.Dispatch<React.SetStateAction<string>>;
  searchName: () => Promise<void>;
}

interface NameBoxProps {
  render: boolean;
}

const NameAfterBeforeCss = css`
  content: '';
  box-sizing: inherit;
  position: absolute;
  border: 2px solid transparent;
  width: 0;
  height: 0;
  z-index: 1;
`

const NameBox = styled.div<NameBoxProps>`
    display: flex;
    padding: 0 10px;
    margin: auto;
    align-items: center;
    position: relative;
    background: transparent;
    width: 30%;
    min-width: 300px;
    height: fit-content;

    &:after {
      ${NameAfterBeforeCss}
      bottom: -2px;
      right: -2px;
    }

    &:before {
      ${NameAfterBeforeCss}
      top: -2px;
      left: -2px;
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

const BorderTransitionCommonCss = css`
  height: 100% !important;
  width: 100% !important;
`

const BorderTransition = css`
    color: #000;
    &:before {
      ${BorderTransitionCommonCss}
      border-top-color: #000;
      border-right-color: #000;
      transition: width 0.25s ease-out, height 0.25s ease-out 0.25s;
    }
    &:after {
      ${BorderTransitionCommonCss}
      border-bottom-color: #000;
      border-left-color: #000;
      transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s, height 0.25s ease-out 0.75s;
    }
`

function NameField({ setName, searchName }: NameFieldProps) {
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
