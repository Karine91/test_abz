import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: '1232431'
    }
    expect(authReducer({}, action)).toEqual({
        uid: action.uid
    });
});

test('should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    }
    expect(authReducer({uid: 'anything'}, action)).toEqual({});
});