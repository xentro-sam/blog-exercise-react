import React from 'react';
import {render} from '@testing-library/react';
import Footer from '..';

describe('Footer', () => {
  it('should render correctly', () => {
    const {asFragment} = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render the title', () => {
    const {queryByText} = render(<Footer />);
    expect(queryByText('©artifact.com 2019')).toBeTruthy();
  });
});
