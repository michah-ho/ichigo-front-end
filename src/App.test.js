import { render, screen } from '@testing-library/react';
import App from './App';

test('renders all 9 boxes', () => {
  render(<App />);
  expect(screen.getByText('1')).toBeTruthy();
  expect(screen.getByText('2')).toBeTruthy();
  expect(screen.getByText('3')).toBeTruthy();
  expect(screen.getByText('4')).toBeTruthy();
  expect(screen.getByText('5')).toBeTruthy();
  expect(screen.getByText('6')).toBeTruthy();
  expect(screen.getByText('7')).toBeTruthy();
  expect(screen.getByText('8')).toBeTruthy();
  expect(screen.getByText('9')).toBeTruthy();
});
