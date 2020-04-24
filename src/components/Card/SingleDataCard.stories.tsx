import React from 'react';
import SingleDataCard from './SingleDataCard';

export default {
  component: SingleDataCard,
  title: 'SingleDataCard'
};

export const singleDataCard = () => 
    <SingleDataCard title='title' value='value'/>;

singleDataCard.story = {
  name: 'Default'
};