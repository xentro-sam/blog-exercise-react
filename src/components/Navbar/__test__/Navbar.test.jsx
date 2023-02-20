import {render} from '@testing-library/react';
import React from 'react';
import Navbar from '..';

describe('Navbar', () => {
  it('should render correctly', () => {
    const {asFragment} = render(<Navbar />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render the title', () => {
    const {queryByText} = render(<Navbar />);
    expect(queryByText('The Artifact')).toBeTruthy();
  });
  it('should render the subtitle', () => {
    const {queryByText} = render(<Navbar />);
    expect(queryByText('Culture & Art Blog')).toBeTruthy();
  });
  it('should render the blog link', () => {
    const {queryByText} = render(<Navbar />);
    expect(queryByText('Blog')).toBeTruthy();
  });
  it('should render the about link', () => {
    const {queryByText} = render(<Navbar />);
    expect(queryByText('About')).toBeTruthy();
  });
  it('should render the contact link', () => {
    const {queryByText} = render(<Navbar />);
    expect(queryByText('Contact')).toBeTruthy();
  });
});
