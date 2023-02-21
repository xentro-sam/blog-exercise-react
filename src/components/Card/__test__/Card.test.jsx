import React from 'react';
import {render} from '@testing-library/react';
import Card from '..';

describe('Card', () => {
  it('should render correctly', () => {
    const {asFragment} = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
  });
});
