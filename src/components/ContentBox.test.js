import { render, screen, fireEvent } from '@testing-library/react';
import ContentBox from './ContentBox';

describe('<ContentBox>', () => {
  const mockIndex = 2;
  const mockHeight = '300px';
  const mockFunc = jest.fn();

  it('Should render content passed into it', () => {
    render(<ContentBox index={mockIndex} height={mockHeight}>HEY</ContentBox>);
    expect(screen.getByText('HEY')).toBeTruthy();
  });

  it('Should call the callback when clicked on', () => {
    render(<ContentBox index={mockIndex} height={mockHeight} handleClick={mockFunc}>HEY</ContentBox>);
    fireEvent.click(screen.getByText('HEY'));
    expect(mockFunc).toHaveBeenCalled();
  });
});