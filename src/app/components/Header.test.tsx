import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Header', () => {
  it('renders the provided image', () => {
    render(<Header imageSrc="http://localhost/test.svg" />);
    const image = screen.getByRole('img', { name: /your svg/i });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', expect.stringContaining('test.svg'));
  });
});
