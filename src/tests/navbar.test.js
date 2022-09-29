import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../components/Navbar';
import { MemoryRouter } from 'react-router-dom';

const cart = [];

test('Renders links', () => {
  render(<Navbar cart={cart} />, { wrapper: MemoryRouter });

  const homePageLink = screen.getByRole('link', { name: 'Home' });
  const firstShopPageLink = screen.getByRole('link', { name: 'Shop' });
  const secondShopPageLink = screen.getByTestId('secondShopLink');

  expect(homePageLink).toBeInTheDocument();
  expect(firstShopPageLink).toBeInTheDocument();
  expect(secondShopPageLink).toBeInTheDocument();
});

test('Renders page name', () => {
  render(<Navbar cart={cart} />, { wrapper: MemoryRouter });

  const heading = screen.getByRole('heading');
  expect(heading).toBeInTheDocument();
});

test('Renders cart length', () => {
  render(<Navbar cart={cart} />, { wrapper: MemoryRouter });

  const number = screen.getByText('0');
  expect(number).toBeInTheDocument();
});

test('Renders image', () => {
  render(<Navbar cart={cart} />, { wrapper: MemoryRouter });

  const image = screen.getByRole('img');
  expect(image).toBeInTheDocument();
});

test('Snapshot', () => {
  const { container } = render(<Navbar cart={cart} />, {
    wrapper: MemoryRouter,
  });
  expect(container).toMatchSnapshot();
});
