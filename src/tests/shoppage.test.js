import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Shoppage from '../components/Shoppage';

test('Shop page snapshot', () => {
  const { container } = render(<Shoppage />);

  expect(container).toMatchSnapshot();
});
