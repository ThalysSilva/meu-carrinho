import { render, screen } from '@testing-library/react';
import React from 'react';

import { capitalize, normalizePrice } from '../../../../utils/functions';
import { ItemCart } from '..';

const propsMock = {
  itemName: 'itemNameMock',
  imgSrc: 'http://imgSrcMock.mock',
  sellPrice: '200',
  price: '240',
  id: '1'
};

const setup = () => render(<ItemCart {...propsMock} />);

describe(ItemCart.name, () => {
  it('Should display headerCart in screen ', () => {
    setup();
    expect(screen.getByText('R$ ' + normalizePrice(propsMock.sellPrice))).toBeInTheDocument();
    expect(screen.getByText('R$ ' + normalizePrice(propsMock.price))).toBeInTheDocument();
    expect(screen.getByTestId('itemNameMock-1')).toBeInTheDocument();
    expect(screen.getByText(capitalize(propsMock.itemName))).toBeInTheDocument();
  });
});
