const RegisterDal = require('../path/to/RegisterDal');
const bcrypt = require('bcrypt');
import {RegisterService} from './Register.service'
describe('login', () => {
  let user;
  beforeEach(() => {
    user = {
      username: 'testuser',
      password: 'testpassword'
    };
    jest.spyOn(RegisterDal, 'getPassword').mockResolvedValue(bcrypt.hashSync(user.password, 10));
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('returns failure status and message when password is incorrect', async () => {
    const incorrectPassword = 'wrongpassword';
    const isMatch = await bcrypt.compare(incorrectPassword, user.password);
    jest.spyOn(bcrypt, 'compare').mockResolvedValue(isMatch);

    const result = await RegisterService.login(user);

    expect(result.status).toBe('failure');
    expect(result.message).toBe('Incorrect username or password');
  });

  it('returns failure status and message when user does not exist', async () => {
    jest.spyOn(RegisterDal, 'getPassword').mockResolvedValue(null);

    const result = await RegisterService.login(user);

    expect(result.status).toBe('failure');
    expect(result.message).toBe('Incorrect username or password');
  });

  it('returns success status when username and password are correct', async () => {
    const isMatch = await bcrypt.compare(user.password, user.password);
    jest.spyOn(bcrypt, 'compare').mockResolvedValue(isMatch);

    const result = await RegisterService.login(user);

    expect(result.status).toBe('success');
  });
});
