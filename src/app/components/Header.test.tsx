import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Header', () => {
  it('renders an image with priority and eager loading', () => {
    render(<Header imageSrc="/test.svg" />);
    const image = screen.getByRole('img', { name: /your svg/i });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('loading', 'eager');
    expect(image).toHaveAttribute('fetchpriority', 'high');
  });
});
