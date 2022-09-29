import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Homepage from '../components/HomePage';

test('Homepage renders text', () => {
  render(<Homepage />);

  const firstPara = screen.getByText(
    /This homepage was created only to practice react-router-dom,/i
  );
  const secondPara = screen.getByText(/it has no other functionality./i);

  expect(firstPara).toBeInTheDocument();
  expect(secondPara).toBeInTheDocument();
});
