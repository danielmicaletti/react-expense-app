import authReducer from '../../reducers/auth';

test('should set login uid', () => {
	const action = {
		type: 'LOGIN',
		uid: '123abc'
	};

	const state = authReducer({}, action);
	expect(state.uid).toEqual(action.uid);
});

test('should clear uid for logout', () => {
	const action = {
		type: 'LOGOUT',
	};

	const state = authReducer({ uid: 'anything' }, action);
	expect(state).toEqual({});
});