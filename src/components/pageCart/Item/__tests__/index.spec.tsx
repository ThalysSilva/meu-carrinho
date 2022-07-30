import { render, screen } from '@testing-library/react';
import React from 'react';

import { normalizePrice } from '../../../../util/functions';
import { ItemCart } from '..';

const propsMock = {
  itemName: 'itemNameMock',
  imgSrc: 'imgSrcMock',
  sellPrice: '200',
  price: '240',
  key: 1
};

const setup = () => render(<ItemCart {...propsMock} />);

describe(ItemCart.name, () => {
  it('Should display headerCart in screen ', () => {
    setup();
    expect(screen.getByText(normalizePrice(propsMock.sellPrice))).toBeInTheDocument();
    expect(screen.getByText(normalizePrice(propsMock.price))).toBeInTheDocument();
    expect(screen.getByTestId('itemNameMock-1')).toBeInTheDocument();
    expect(screen.getByText(propsMock.itemName)).toBeInTheDocument();
  });
});
