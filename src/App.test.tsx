import { render, screen } from '@testing-library/react';
import App from './App';

test('renders You Must Hear', () => {
  render(<App />);
  const linkElement = screen.getByText('You Must Hear');
  expect(linkElement).toBeInTheDocument();
});
