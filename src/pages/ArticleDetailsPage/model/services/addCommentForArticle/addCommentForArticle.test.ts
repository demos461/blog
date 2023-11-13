import {
    addCommentForArticle,
} from './addCommentForArticle';

import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

const data = {
    id: '1',
    text: 'text',
    user: {
        id: '1',
        username: 'user',
    },
};

describe('addCommentForArticle.text', () => {
    test('success addCommentForArticle', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, {
            user: {
                authData: {
                    id: '1',
                },
            },
            articleDetails: {
                data: {
                    id: '1',
                },
            },
        });
        thunk.api.post.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk('text');

        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error addCommentForArticle', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, {
            profile: {
                form: data,
            },
        });

        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk('text');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
