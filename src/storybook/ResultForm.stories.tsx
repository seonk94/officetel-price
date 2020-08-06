import React from 'react';
import ResultForm from '../components/ResultForm'

export default {
  title: 'components|ResultForm',
  component: ResultForm
}

export const searchedResultFormStory = () => <ResultForm
  name='Hong'
  loadingStatus={'searched'}
/>
export const searchingResultFormStory = () => <ResultForm
  name='Hong'
  loadingStatus={'searching'}
/>
export const waitingResultFormStory = () => <ResultForm
  name='Hong'
  loadingStatus={'waiting'}
/>
