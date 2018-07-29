import { login, logout } from '../../actions/auth';

test('should generate login action object', () => {
    const uid = '123123';
    expect(login(uid)).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should generate logout action object', () => {
    expect(logout()).toEqual({
        type: 'LOGOUT'
    });
});