import 'jest-localstorage-mock';
import '@testing-library/jest-dom/extend-expect';
import { server } from './utils/tests/mocks/server';

beforeAll(() => {
  // Enable the mocking in tests.
  server.listen();
});

afterEach(() => {
  // Reset any runtime handlers tests may use.
  server.resetHandlers();
});

afterAll(() => {
  // Clean up once the tests are done.
  server.close();
});
