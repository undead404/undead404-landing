import { render, screen } from '@testing-library/react';

import App from './App';

describe('renders App', () => {
  it('renders You Must Hear', () => {
    expect.assertions(1);
    render(<App />);
    const linkElement = screen.getByText('You Must Hear');
    expect(linkElement).toBeInTheDocument();
  });
});
