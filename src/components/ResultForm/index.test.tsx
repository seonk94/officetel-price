import React from 'react';
import { render, screen } from '@testing-library/react';
import ResultForm from '.';

test('render searched ResultForm test', () => {
    const { getByText } = render(<ResultForm name='Hong' loadingStatus='searched'/>);
    const findYouElement = getByText('But i will find you.');
    expect(findYouElement.tagName).toBe('SPAN');
    screen.debug();
})

test('render searching ResultForm test', () => {
    const { getByText } = render(<ResultForm name='Hong' loadingStatus='searching'/>);
    const searchIcon = getByText('search');
    expect(searchIcon.tagName).toBe('SPAN');
    screen.debug();
})
