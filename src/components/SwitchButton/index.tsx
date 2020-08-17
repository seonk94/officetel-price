import React from 'react';
import styled from 'styled-components';

interface SwitchButtonProps {
  value: boolean;
  clickHandler: () => void;
}

const StyledSwtichDiv = styled.div`
  display: flex;
  align-items: center;
  .title-span {
    margin-right: 8px;
    font-weight: 400;
  }

  .checkbox-input {
    height: 0;
    width: 0;
    visibility: hidden;
    display: none;
  }

  .switch-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 48px;
    height: 24px;
    background: grey;
    border-radius: 48px;
    position: relative;
    transition: background-color .2s;
  }

  .switch-label .slider-span {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    transition: 0.2s;
    background: #fff;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  }

  .checkbox-input:checked + .switch-label .slider-span {
    left: calc(100% - 2px);
    transform: translateX(-100%);
    background: limeGreen;
  }

  .switch-label:active .slider-span {
    width: 30px;
  }
`


function SwitchButton({ clickHandler, value }: SwitchButtonProps) {
  return (
    <StyledSwtichDiv>
      <span className="title-span">
        DarkMode
      </span>
      <input
        className="checkbox-input"
        type="checkbox"
        checked={value}
        readOnly
      />
      <label
        onClick={clickHandler}
        className="switch-label"
      >
        <span className={`slider-span`} />
      </label>
    </StyledSwtichDiv>
  )
}
export default SwitchButton;
