import React from 'react';
import { render, screen } from '@testing-library/react';
import BookLoader from '.';

test('renders BookLoader component', () => {
  const { getByText, getByAltText } = render(<BookLoader />);
  const searchElement = getByText('search');
  expect(searchElement.tagName).toBe('SPAN')

  const imageElement = getByAltText('Book Image');
  const imageSrc = (imageElement as HTMLImageElement).src
  expect(imageSrc).toContain('SimpleBook');
  
  screen.debug();
});