import { AddCommentFormSchema } from '../types/AddCommentForm';

import {
    addCommentFormActions,
    addCommentFormReducer,
} from './addCommentFormSlice';

describe('addCommentFormSlice.test', () => {
    test('test set test', () => {
        const state: DeepPartial<AddCommentFormSchema> = {
            text: 'hello world',
        };
        expect(addCommentFormReducer(
            state as AddCommentFormSchema,
            addCommentFormActions.setText('hi'),
        )).toEqual({ text: 'hi' });
    });
});
