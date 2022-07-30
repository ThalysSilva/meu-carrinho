import { rest } from 'msw';
import config from '../../../config';
import { mockReturnClientHttp } from './mockReturnClientHttp';

const { cart } = config.apiRoutes;

export const serverHandlerMock = jest.fn((req, res, ctx) =>
  res(ctx.status(200), ctx.json(mockReturnClientHttp))
);

export const handlers = [rest.get(cart.lessOrEqualThanTen, serverHandlerMock)];
