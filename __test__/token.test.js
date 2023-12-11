const jwt = require('jsonwebtoken');
jest.mock('jsonwebtoken', () => ({
  sign: jest.fn(),
}));

describe('generateValidToken', () => {
  it('should generate a valid token object', () => {

    // Mock the jwt.sign function to return a fixed token
    jwt.sign.mockReturnValue('mocked-token');
  });
});