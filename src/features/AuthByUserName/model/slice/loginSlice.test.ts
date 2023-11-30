import { LoginSchema } from '../types/loginSchema';

import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = {
            username: 'user1',
        };
        expect(
            loginReducer(state as LoginSchema, loginActions.setUsername('user2')),
        ).toEqual({ username: 'user2' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = {
            password: 'qwerty123',
        };
        expect(
            loginReducer(state as LoginSchema, loginActions.setPassword('123qwerty')),
        ).toEqual({ password: '123qwerty' });
    });
});
