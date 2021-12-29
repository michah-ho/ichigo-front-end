import { render, screen } from '@testing-library/react';
import TopLayout from './TopLayout';

describe('<TopLayout/>', () => {
  it('should render properly without passing any props', () => {
    render(<TopLayout/>)
    expect(screen.getByText('1')).toBeTruthy();
  });
});