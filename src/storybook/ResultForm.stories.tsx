import React from 'react';
import ResultForm from '@/src/components/ResultForm'

export default {
  title: 'components|ResultForm',
  component: ResultForm
}

export const SearchedResultFormStory = () => <ResultForm
  name='Hong'
  loadingStatus={'searched'}
/>
export const SearchingResultFormStory = () => <ResultForm
  name='Hong'
  loadingStatus={'searching'}
/>
export const SaitingResultFormStory = () => <ResultForm
  name='Hong'
  loadingStatus={'waiting'}
/>
