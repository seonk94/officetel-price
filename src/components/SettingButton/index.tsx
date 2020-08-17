import React, { useState } from 'react';
import styled from 'styled-components';
import SettingCard from '../SettingCard';

interface SettingButtonProps {
  toggleTheme: () => void;
}
const SettingButtonDiv = styled.div`
  display: inline-block;
  position: absolute;
  top: 0px;
  right: 0px;
  margin: 4px;

  .material-icons {
    background: #ddd;
    border-radius: 50%;
    width: fit-content;
    height: fit-content;
    padding: 4px;
    border: 1px solid #999;
    user-select: none;

    &:hover {
      background: #eee;
      border: 1px solid #333;
      cursor: pointer;
    }
  }
`

function SettingButton({ toggleTheme }: SettingButtonProps) {

  const [showCard, setShowCard] = useState(false);

  return (
    <SettingButtonDiv>
      <span className="material-icons" onClick={() => setShowCard(!showCard)}>
        settings
      </span>
      {showCard && <SettingCard toggleTheme={toggleTheme} />}
    </SettingButtonDiv>
  )
}
export default SettingButton;
