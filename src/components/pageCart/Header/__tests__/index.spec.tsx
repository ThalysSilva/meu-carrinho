import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { HeaderCart } from '..';
import userEvent from '@testing-library/user-event';

const mockFn = jest.fn();

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: jest.fn(() => ({ back: mockFn }))
}));

const setup = () => render(<HeaderCart />);

describe(HeaderCart.name, () => {
  it('Should display headerCart in screen ', () => {
    setup();
    expect(screen.getByTestId('returnButton')).toBeInTheDocument();
    expect(screen.getByText('Meu carrinho')).toBeInTheDocument();
  });

  it('Should click on return button and call mockFn', async () => {
    setup();

    const returnButton = screen.getByTestId('returnButton');

    userEvent.click(returnButton);
    await waitFor(() => expect(mockFn).toBeCalled());
  });
});
