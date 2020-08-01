import React from 'react';
import ResultForm from '../components/ResultForm'

export default {
  title: 'components|ResultForm',
  component: ResultForm
}

export const searchedResultFormStory = () => <ResultForm
  loadingStatus={'searched'}
/>
export const searchingResultFormStory = () => <ResultForm
  loadingStatus={'searching'}
/>
export const waitingResultFormStory = () => <ResultForm
  loadingStatus={'waiting'}
/>
