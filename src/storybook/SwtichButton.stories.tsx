import React, { useState } from 'react';
import SwitchButton from '../components/SwitchButton';

export default {
  title: 'components',
  component: SwitchButton
}

export const SwitchButtonStory = () => {
  const [value, setValue] = useState(false);

  return <SwitchButton
    value={value}
    clickHandler={() => setValue(!value)}
  />
}
