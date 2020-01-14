import React from 'react';
import ComparisonCard from './ComparisonCard';

export default {
  component: ComparisonCard,
  title: 'ComparisonCard'
};

export const comparisonCard = () => <ComparisonCard data1='111' data2='222' key1='월세' key2='전세' />;

comparisonCard.story = {
  name: 'Default'
};