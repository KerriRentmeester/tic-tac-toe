import { render, screen } from '@testing-library/react';
import Game from './src/components/game';

test('renders learn react link', () => {
  render(<Game />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
