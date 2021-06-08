import React from 'react';
import styled from 'styled-components';
import SwitchButton from '../SwitchButton';
import { darkTheme } from '@/src/style/theme';
import { ThemeDispatch } from '@/src/App';

interface SettingCardProps {
  toggleTheme: () => void;
}

const StyledSettingCard = styled.div`
  width: fit-content;
  height: fit-content;
  background: #ddd;
  position: absolute;
  top: 0px;
  right: 40px;
  padding: 8px;
  border-radius: 4px;
  border: 0.5px solid #bbb;
`

function SettingCard({ toggleTheme }: SettingCardProps) {

  const isDarkMode = (theme: CustomTheme) => {
    return theme === darkTheme;
  }

  return (
    <ThemeDispatch.Consumer>
      {(theme) => (
        <StyledSettingCard>
          <SwitchButton value={isDarkMode(theme)} clickHandler={toggleTheme} />
        </StyledSettingCard>
      )}
    </ThemeDispatch.Consumer>
  )
}
export default SettingCard;
