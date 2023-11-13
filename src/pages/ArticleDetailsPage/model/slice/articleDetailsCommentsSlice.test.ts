import {
    fetchCommentsByArticleId,
} from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';

import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';

const data = [{
    id: '1',
    text: 'hello world',
    user: {
        id: '1',
        username: 'user',
    },
}];

describe('articleDetailsComments.test', () => {
    test('test set update profile service pending', () => {
        const state: DeepPartial<ArticleDetailsCommentsSchema> = {
            isLoading: false,
            error: undefined,
        };
        expect(articleDetailsCommentsReducer(
            state as ArticleDetailsCommentsSchema,
            fetchCommentsByArticleId.pending,
        )).toEqual({
            isLoading: true,
            error: undefined,
        });
    });

    test('test set update profile service fullfiled', () => {
        const state: DeepPartial<ArticleDetailsCommentsSchema> = {
            isLoading: false,
            error: undefined,
        };
        expect(articleDetailsCommentsReducer(
            state as ArticleDetailsCommentsSchema,
            fetchCommentsByArticleId.fulfilled(data, '', ''),
        )).toEqual({
            isLoading: false,
            error: undefined,
            ids: ['1'],
            entities: {
                1: {
                    id: '1',
                    text: 'hello world',
                    user: { id: '1', username: 'user' },
                },
            },
        });
    });
});
