

export const providerMock = {
  cartItems: [
    {
      name: 'nameMock',
      price: '330',
      sellPrice: '330',
      imgUrl: 'http://imgSrcMock.mock'
    },
    {
      name: 'nameMock2',
      price: '340',
      sellPrice: '340',
      imgUrl: 'http://imgSrcMock.mock'
    }
  ],
  setCartItems: jest.fn(),
  isCartItemsSetted: true
};
