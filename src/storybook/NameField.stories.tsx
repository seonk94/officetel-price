import React from 'react';
import NameField from '../components/NameField';

export default {
  title: 'components',
  component: NameField,
}

export const nameFieldStory = () => <NameField
  setName={() => { }}
  searchName={async () => { }}
/>
