import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ItemCard from '../components/ItemCard';


const onClickMock = jest.fn();

test('ItemCard renders name', () => {
  render(<ItemCard name="product" addToCart={onClickMock} />);

  const name = screen.getByText('Name:');
  const productName = screen.getByText('product');

  expect(name).toBeInTheDocument();
  expect(productName).toBeInTheDocument();
});

test('ItemCard renders quantity', () => {
    render(<ItemCard name="product" addToCart={onClickMock} />);

    const input = screen.getByRole('spinbutton');
    const label = screen.getByText('Quantity:')

    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument()
});

test('ItemCard renders button', () => {
    render(<ItemCard name="product" addToCart={onClickMock} />);

    const button = screen.getByRole('button');
    
    expect(button).toBeInTheDocument();
})

test('Form changes quantity', () => {
  render(<ItemCard name="product" addToCart={onClickMock} />);

  const form = screen.getByRole('spinbutton');
  userEvent.type(form, '1');
  expect(form.value).toBe('11');

})

test('AddToCart fires on button click', () => {
  render(<ItemCard name="product" addToCart={onClickMock} />);

  userEvent.click(screen.getByRole('button'));
  expect(onClickMock).toBeCalled()
});
