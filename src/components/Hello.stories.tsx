import React from 'react';
import Hello from './Hello';

export default {
  component: Hello,
  title: 'Hello'
};

export const hello = () => <Hello name="Storybook" />;

hello.story = {
  name: 'Default'
};