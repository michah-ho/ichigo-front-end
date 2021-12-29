import { render, screen } from '@testing-library/react';
import BottomLayout from './BottomLayout';

describe('<BottomLayout/>', () => {
  it('should render properly without passing any props', () => {
    render(<BottomLayout/>)
    expect(screen.getByText('5')).toBeTruthy();
  });
});