import {
    getAddCommentFormError,
    getAddCommentFormText,
} from './addCommentFormSelectors';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('addCommentFormSelectors.test', () => {
    test('should return test', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                text: 'some text',
            },
        };
        expect(getAddCommentFormText(state as StateSchema)).toEqual('some text');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormText(state as StateSchema)).toEqual('');
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                error: 'error',
            },
        };
        expect(getAddCommentFormError(state as StateSchema)).toEqual('error');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined);
    });
});
