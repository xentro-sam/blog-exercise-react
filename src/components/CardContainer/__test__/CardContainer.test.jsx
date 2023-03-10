import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import {mockBlogPostData} from '../../../mocks/blogPosts';
import BlogPosts from '..';
import makeRequest from '../../../utils/makeRequest';

jest.mock('../../../utils/makeRequest/');

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

describe('BlogPosts', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should render correctly', async () => {
    makeRequest.mockResolvedValueOnce(mockBlogPostData);
    expect(makeRequest).not.toHaveBeenCalled();
    const {asFragment} = render(<BlogPosts />);
    await waitFor(() => {
      expect(screen.getByText('mock title 1')).toBeTruthy();
    });
    expect(asFragment()).toMatchSnapshot();
    expect(makeRequest).toBeCalledTimes(1);
  });
});
