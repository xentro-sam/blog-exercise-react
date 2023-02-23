import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react';
import Card from '..';
import makeRequest from '../../../utils/makeRequest';

jest.mock('../../../utils/makeRequest');

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

const cardInfo = {
  id: '1',
  date: '2020-10-10T00:00:00.000Z',
  reading_time: '5 mins',
  title: 'Test Title',
  description: 'Test Description',
  image: 'https://picsum.photos/200/300',
  liked: false,
  claps: 0,
};

describe('Card', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should render correctly', () => {
    makeRequest.mockResolvedValueOnce({data: {claps: 1}});
    const {asFragment} = render(<Card key={cardInfo.id} {...cardInfo} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should increment claps', async () => {
    const {getByAltText, getByTestId} = render(<Card key={cardInfo.id} {...cardInfo} />);
    const clappingIcon = getByAltText('clapping');
    const clapCount = getByTestId('clap-count');
    expect(clapCount.textContent).toBe('0');
    makeRequest.mockResolvedValueOnce({data: {claps: 1}});
    expect(makeRequest).not.toHaveBeenCalled();
    fireEvent.click(clappingIcon);
    await waitFor(() => {
      expect(makeRequest).toHaveBeenCalled();
      expect(clapCount.textContent).toBe('1');
    });
  });
  it('should toggle like', async () => {
    const {getByAltText} = render(<Card key={cardInfo.id} {...cardInfo} />);
    const likeIcon = getByAltText('like');
    expect(likeIcon.src).toContain('heart-black.svg');
    makeRequest.mockResolvedValueOnce({data: {liked: true}});
    expect(makeRequest).not.toHaveBeenCalled();
    fireEvent.click(likeIcon);
    await waitFor(() => {
      expect(makeRequest).toHaveBeenCalled();
      expect(likeIcon.src).toContain('heart-red.svg');
    });
  });
});
